# Run as regular user
set -x


cd ~
wget -O opencv.zip https://github.com/Itseez/opencv/archive/3.4.2.zip
unzip opencv.zip
wget -O opencv_contrib.zip https://github.com/Itseez/opencv_contrib/archive/3.4.2.zip
unzip opencv_contrib.zip
wget https://bootstrap.pypa.io/get-pip.py