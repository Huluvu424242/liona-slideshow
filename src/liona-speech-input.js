'use strict';

import {Logger} from './log-helper';
import {Spracheingabe} from './speech-input';
import {Sprachausgabe} from './speech-output';

const template = document.createElement('template');
template.innerHTML = `
     <style>
         
     </style>
    <div>
      <label for="eingabefeld">Suchbegriffe:</label>
      <input id="eingabefeld">
      <button id="microphon-button"><em>Freie Spracheingabe starten ...</em></button>
      <button id="reader-button"><em>Suchkriterien vorlesen</em></button>
    </div>
`;


class LionaSpeechInput extends HTMLElement {

    constructor() {
        super();  // immer zuerst aufrufen
        // for init attribut defaults
        // e.g. this.src = '';
        Logger.logMessage('constructor called');
    }

    connectedCallback() {
        Logger.logMessage('custom element in Seite eingehängt');
        this.erzeugeShadowDOMIfNotExists();
        Logger.logMessage('ShadowDom befüllt');
    }

    disconnectedCallback() {
        Logger.logMessage('element has been removed');
    }

    attributeChangedCallback(name, oldval, newval) {
        // do something every time the attribute changes
        Logger.logMessage(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
    }

    erzeugeShadowDOMIfNotExists() {
        if (!this.shadowRoot) {
            Logger.logMessage('creating shadow dom');
            this.attachShadow({mode: 'open'});
        }
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const spracheingabe = new Spracheingabe(this.shadowRoot, 'eingabefeld');
        const sprachausgabe = new Sprachausgabe(this.shadowRoot, 'eingabefeld');

        // onClick auf Micro Button definieren
        this.microphonButton = this.shadowRoot.getElementById('microphon-button');
        this.microphonButton.addEventListener('click', () => {
            spracheingabe.erkenneSprachEingabe((text) => {
                    sprachausgabe.suchkriterienVorlesen(text);
                }
            );
        });
        // onClick auf Reader Button definieren
        const eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
        Logger.logMessage('##feld' + eingabeFeld.outerHTML);
        this.readerButton = this.shadowRoot.getElementById('reader-button');
        this.readerButton.addEventListener('click', () => {
            sprachausgabe.suchkriterienVorlesen(eingabeFeld.value);
        });
    }


// static get observedAttributes() {
//     return ['toggled'];
// }


// get toggled() {
//     return this.getAttribute('toggled') === 'true';
// }
//
// // the second argument for setAttribute is mandatory, so we’ll use an empty string
// set toggled(val) {
//     if (val) {
//         this.setAttribute('toggled', true);
//     } else {
//         this.setAttribute('toggled', false);
//     }
// }


}

export {LionaSpeechInput}




