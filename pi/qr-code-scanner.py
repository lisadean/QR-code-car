from imutils.video import VideoStream
from pyzbar import pyzbar
import imutils
import time
import cv2

displayVideoWindow = False
onRaspberryPi = True

# initialize the video stream and allow the camera sensor to warm up
print("[INFO] starting video stream...")
if onRaspberryPi:
    source = 0
else:
    source = 1
vs = VideoStream(src=source).start()
time.sleep(2.0)

# Set of unique barcodes found so far
found = set()

# loop over the frames from the video stream
while True:
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

        if barcodeData not in found:
            print("[INFO] Found barcode: {}".format(barcodeData))
            found.add(barcodeData)

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
