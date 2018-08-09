# Run as sudo
set -x

# Free up space
apt-get purge wolfram-engine --yes
apt-get purge libreoffice* --yes
apt-get clean --yes
apt-get autoremove --yes

# Get ready to install
apt-get update && apt-get upgrade --yes
apt-get install build-essential cmake pkg-config --yes

# Install dependancies and stuff
apt-get install libjpeg-dev libtiff5-dev libjasper-dev libpng12-dev --yes
apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev --yes
apt-get install libxvidcore-dev libx264-dev --yes
apt-get install libgtk2.0-dev libgtk-3-dev --yes
apt-get install libatlas-base-dev gfortran --yes
apt-get install python2.7-dev python3-dev --yes
