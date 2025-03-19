namespace ReceiverLibrary {

    export function handleReceivedValue() {
        radio.onReceivedValue(function (receivedString: string, value: number) {
            if (receivedString == "PJT DELTA" && value == 172098) {
                datalogger.log(datalogger.createCV("PJT DELTA", 4));
                wuKong.setMotorSpeed(wuKong.MotorList.M1, 100);
                wuKong.setMotorSpeed(wuKong.MotorList.M2, 100);
                record.startRecording(record.BlockingState.Nonblocking);
            } else {
                radio.sendString("Access Denied, Port: NULL");
            }
        });
    }

    export function handleReceivedNumber() {
        radio.onReceivedNumber(function (receivedNumber: number) {
            if (receivedNumber == 33657) {
                datalogger.log(datalogger.createCV("Start", receivedNumber));
                wuKong.setMotorSpeed(wuKong.MotorList.M1, 75);
                wuKong.setMotorSpeed(wuKong.MotorList.M2, 75);
            } else {
                radio.sendString("Access Denied, Attempt To Override PRC");
            }
        });
    }

    export function handleLogoPress() {
        input.onLogoEvent(TouchButtonEvent.Pressed, function () {
            music.setVolume(255);
            wuKong.stopAllMotor();
            music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone);
            wuKong.setLightMode(wuKong.LightMode.BREATH);
            wuKong.lightIntensity(100);
            basic.showIcon(IconNames.No);
            basic.pause(5000);
            basic.clearScreen();
            wuKong.lightIntensity(0);
            wuKong.setLightMode(wuKong.LightMode.OFF);
        });
    }

    export function handleReceivedString() {
        radio.onReceivedString(function (receivedString: string) {
            if (receivedString == "01P0GFH1") {
                datalogger.log(datalogger.createCV(receivedString, 2));
                music.setVolume(255);
                wuKong.stopAllMotor();
                music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone);
                wuKong.setLightMode(wuKong.LightMode.BREATH);
                wuKong.lightIntensity(100);
                basic.showIcon(IconNames.No);
                basic.pause(5000);
                basic.clearScreen();
                wuKong.lightIntensity(0);
                wuKong.setLightMode(wuKong.LightMode.OFF);
            } else {
                radio.sendString("Access Denied, Attempt to override Power Lasers To Shutdown.");
            }
        });
    }

    export function startReceivingLog() {
        datalogger.log(datalogger.createCV("Started Recieving", 1));
        radio.setGroup(2);
    }

    export function handleServoControl() {
        basic.forever(function () {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 360);
        });
    }

    export function handleServoPause() {
        basic.forever(function () {
            basic.pause(2000);
            wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 180);
        });
    }
}
