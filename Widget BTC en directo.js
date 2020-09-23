const apibtc = `https://api.bitfinex.com/v1/pubticker/btcusd`;
const req = new Request(apibtc);
const res = await req.loadJSON();

if (config.runsInWidget) {
    const widget = new ListWidget();

    const imgReqBq = await new Request("https://i.pinimg.com/originals/71/ba/45/71ba454512bf5f5485fbc623e1295262.png");
    const imgBq = await imgReqBq.loadImage();
    
    widget.backgroundImage = imgBq;

    const title = widget.addText("PRECIO BTC");
    title.textColor = Color.red();
    title.textOpacity = 1;
    title.font = new Font("Arial Black", 16);
    title.centerAlignText()
    

    widget.addSpacer(5);

    const btcname = widget.addText(`VENTA:${res.ask} COMPRA:${res.bid} HIGH:${res.high}   LOW:${res.low}`);
    btcname.textColor = Color.yellow();
    btcname.textOpacity = 1;
    btcname.font = new Font("Courier", 11);
    btcname.centerAlignText()

    Script.setWidget(widget);
    Script.complete();
}
