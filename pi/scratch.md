## Zbar tools

From:
https://www.hackster.io/faweiz/qr-code-on-raspberry-pi-5f6764

``` shell
sudo apt-get install zbar-tools
ls /dev/video*
zbarcam /dev/video
```

## Connecting via SSH

``` shell
brew install nmap
nmap -p 22 --open -sV 10.150.40.0/16
ssh pi@10.150.41.190
```

or

``` shell
ssh pi@qr-scanner-lisa.local
```

## Install node
via: https://github.com/audstanley/NodeJs-Raspberry-Pi

``` shell
wget -O - https://raw.githubusercontent.com/audstanley/NodeJs-Raspberry-Pi/master/Install-Node.sh | sudo bash
```
