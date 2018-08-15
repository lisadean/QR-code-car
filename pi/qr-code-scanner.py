from imutils.video import VideoStream
from pyzbar import pyzbar
import argparse
import imutils
import time
import cv2
from datetime import datetime
from datetime import timedelta
import requests

api_url = 'http://codebot.lisadean.net/project/latest'
last_send = datetime.now() - timedelta(seconds=60)
last_barcode = ''

# parse arguments
ap = argparse.ArgumentParser()
ap.add_argument("-c", "--cam", type=str, default="pi",
                help="run on [pi] or [mac]")
args = vars(ap.parse_args())

displayVideoWindow = False

# initialize the video stream and allow the camera sensor to warm up
print("[INFO] starting video stream...")
if args["cam"] == "pi":
    source = 0
else:
    source = 1
vs = VideoStream(src=source).start()
time.sleep(2.0)

# loop over the frames from the video stream
while True:

    if last_send < (datetime.now() - timedelta(seconds=10)):
        # print("10 seconds have passed" + str(datetime.now()))
        last_barcode = ''

    # grab the fram from the threaded video stream and resize it to have a
    # maximum width of 400 pixels
    frame = vs.read()
    frame = imutils.resize(frame, width=400)

    # find the barcodes in the frame and decode each of the barcodes
    barcodes = pyzbar.decode(frame)

    for barcode in barcodes:
        # the barcode data is a bytes object so if we want to draw it on
        # our output image we need to convert it to a string first
        barcodeData = barcode.data.decode("utf-8")

        if displayVideoWindow:
            # extract the bounding box location of the barcode and draw the
            # bounding box surrounding the barcode on the image
            (x, y, w, h) = barcode.rect
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)

            # draw the barcode data and barcode type on the image
            # text = "{} ({})".format(barcodeData, barcodeType)
            text = "{}".format(barcodeData)
            cv2.putText(frame, text, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX,
                        0.5, (0, 0, 255), 2)

        if barcodeData != last_barcode:
            print("[INFO] Found barcode: {}".format(barcodeData))
            last_barcode = barcodeData
            last_send = datetime.now()
            if isinstance(int(barcodeData), int):
                r = requests.post(
                    api_url,
                    params={'id': last_barcode}
                    )
                print(r.url)
                print(r.status_code, r.reason)

    if displayVideoWindow:
        # show the output frame
        cv2.imshow("Barcode Scanner", frame)
        key = cv2.waitKey(1) & 0xFF

        # if the `q` key was pressed, break from the loop
        if key == ord("q"):
            break

# cleanup (if I let it get to this point)
print("[INFO] cleaning up...")
cv2.destroyAllWindows()
vs.stop()
