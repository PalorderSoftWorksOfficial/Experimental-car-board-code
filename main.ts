radio.onReceivedValue(function (recievedString, value) {
    if (recievedString == "PJT DELTA", value == 172098) {
        datalogger.log(datalogger.createCV("PJT DELTA", 4))
        music.setVolume(255)
        wuKong.stopAllMotor()
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
        wuKong.setLightMode(wuKong.LightMode.BREATH)
        wuKong.lightIntensity(100)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
        basic.clearScreen()
        wuKong.lightIntensity(0)
        wuKong.setLightMode(wuKong.LightMode.OFF)
    } else {
        radio.sendString("Access Denied, Port: NULL")
    }
})
radio.onReceivedNumber(function (ReceivedNumber) {
    if (ReceivedNumber == 33657) {
        datalogger.log(datalogger.createCV("Start", ReceivedNumber))
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 100)
    } else {
        radio.sendString("Access Denied, Attempt To Override PRC")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "01P0GFH1") {
        datalogger.log(datalogger.createCV(receivedString, 2))
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -100)
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
    } else {
        radio.sendString("Access Denied, Attempt to override Power Lasers To Shutdown.")
    }
})
datalogger.log(datalogger.createCV("Started Recieving", 1))
radio.setGroup(2)
basic.forever(function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 360)
})
basic.forever(function () {
    basic.pause(2000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 180)
})
basic.forever(function () {
	
})
