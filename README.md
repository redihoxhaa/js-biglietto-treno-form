# GENERATORE BIGLIETTO STILIZZATO

Consegna esercizio:

```
Scrivere un programma che chieda all’utente:

- il numero di chilometri da percorrere
- età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
```

---

In questo esercizio, che riprende la consegna di ieri, dobbiamo andare a sostituire i campi di prompt con un vero e proprio form stilizzato, che stamperà il nostro biglietto generato in base alle informazioni inserite.

Seguendo la consegna, l'esercizio comprende due milestone:

- la prima riguarda lo svoglimento della parte principale, ovvero lo script JS che ci permettere di calcolare il prezzo del biglietto nelle diverse casistiche. L'output dovrà essere in console.

- nella seconda invece dovremo raggruppare gli input in un vero e proprio form, e stilizzare la pagina in modo che abbia un design accattivante. Questa volta i dati generati andranno stampati sulla pagina e non più nella console.

## MILESTONE 1:

Partiamo come sempre scomponendo il problema in diversi piccoli problemi.

1.  Dichiariamo una variabile const **pricePerKm** alla quale attribuiamo il costo in € della tariffa per km.

2. Dichiariamo due variabili const **discount18** e **discount65** alle quali attribuiamo il valore percentuale dello sconto per la rispettiva categoria.

 3. Dichiariamo una variabile const **userKm**, alla quale assegneremo il valore inserito nel campo di input tramite la proprietà _.value_, cambiandolo da stringa a numero con la funzione _Number()_. Nel campo di input l'utente inserirà il valore dei km che desidera percorrere.
 
 4. Dichiariamo una variabile const **userAge**, alla quale assegneremo il valore inserito nel campo di input tramite la proprietà _.value_, cambiandolo da stringa a numero con la funzione _Number()_. Nel campo di input l'utente inserirà la propria età.

 5. Dichiariamo una due condizioni per convalidare i dati, secondo la quale se **!isNaN === userKm && !isNaN === userAge** (ovvero se i valori inseriti sono solo e solamente numeri), il programma andrà avanti, altrimenti verrà mostrato in console un messaggio di errore.

 6. Calcolare il totale del prezzo, dichiarando una variabile di tipo let **ticketPrice** (la dichiariamo di tipo let perché potremmo riassegnare alla stessa variabile un altro valore nel caso in cui dovremmo applicare uno sconto), alla quale assegneremo il prodotto tra **userKm** e **pricePerKm**.

 7. Dichiariamo 2 condizioni come segue:
    - se **userAge** è < di "18", l'operazione da effettuare sarà la sottrazione tra **ticketPrice** e **discount18**.
    - altrimenti se **userAge** è >=  di "65", l'operazione da effettuare sarà la sottrazione tra **ticketPrice** e **discount65**.
Se **userAge** non rientra nelle due condizioni, **ticketPrice** sarà stampato senza effettuare ulteriori operazioni.

8. Stampiamo in console il valore di **ticketPrice** (usiamo il metodo _toFixed(2)_ che ci permette di selezionare il numero con massimo 2 decimali), preceduto dalla stringa "Il prezzo del tuo biglietto è: ".

## MILESTONE 2:

Andiamo adesso a stilizzare la nostra pagina, andando a racchiudere gli input in form in modo da poter rendere funzionante il pulsante di reset che andremo ad implementare. Possiamo andare ad aggiungere delle funzioni di calcolo di numeri randomici per inserire informazioni nel biglietto come il n° della carrozza e il n° del biglietto. Andremo ad implementare un pulsante che genererà il biglietto e ce lo farà visualizzare al di sotto del form. A questo punto potremo dare colore e struttura ai nostri elementi HTML tramite il CSS e il nostro generatore sarà pronto.