'use strict';

import {Logger} from './log-helper';

class Sprachausgabe {

    constructor() {
        this.sprachSynthese = window.speechSynthesis;
        Logger.logMessage('####constructor called');
    }

    suchkriterienVorlesen(zuLesenderText) {
        if (this.sprachSynthese.speaking) {
            Logger.logMessage('Spricht bereits');
            return;
        }
        if (zuLesenderText !== '') {
            var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + zuLesenderText;
            Logger.logMessage("Text:" + vorleseText);
            var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);

            leserStimmeMitText.onend = () => (event)
            {
                Logger.logMessage('Vorlesen beendet');
            }
            leserStimmeMitText.onerror = () => (event)
            {
                Logger.logMessage('Fehler beim Vorlesen');
            }
            var voices = this.sprachSynthese.getVoices();
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].default) {
                    Logger.logMessage("Voice:" + voices[i].name + voices[i].lang);
                    leserStimmeMitText.voice = voices[i];
                    break;
                }
            }
            leserStimmeMitText.pitch = 1;
            leserStimmeMitText.rate = 1;
            leserStimmeMitText.volume = 1;
            this.sprachSynthese.speak(leserStimmeMitText);
        }
    }

}

export {Sprachausgabe};
