# Biglietto treno form

Scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o _output_) sarà anch’essa da scrivere in console.

**MILESTONE 2:**
**Solo una volta che il milestone 1 sarà completo e funzionante** allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Passaggi

1. Sviluppo del form
2. Chiedere all'utente Nome e cognome.
3. Chiedere all'utente i chilometri che vuole percorrere.
4. Chiedere all'utente da menù a tendina in che categoria si riconosce Minorenne, Maggiorenne, Over 65.
5. Dichiarare le variabili.
6. Siamo a conoscenza che il tratto ha un costo di 0.21 €/Km.
7. Applicare uno sconto del 20% per <18 anni.
8. Applicare uno sconto del 40% per >65 anni.
9. Il dato in output va stampato in formato numerico(massimo 2 cifre dopo la virgola per indicare i centesimi).
10. Con il tasto GENERA nel form generare il biglietto con relativi dati tabulari
11. Con tasto ANNULLA ripulire il form svuotando i campi e permettere di ricompilare nuovamente il form.
