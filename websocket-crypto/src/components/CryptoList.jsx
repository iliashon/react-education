import { useEffect } from "react";
import CryptoItem from "./CryptoItem";

const ws = new WebSocket("wss://stream.binance.com:443/ws");

const TRACKED_CURRENCY = ["btcusdt@aggTrade", "xrpusdt@aggTrade"];

ws.onopen = (e) => {
    console.log("Open conected");
    ws.send(
        JSON.stringify({
            method: "SUBSCRIBE",
            params: TRACKED_CURRENCY,
            id: 1,
        })
    );
};

export default function CryptoList() {
    useEffect(() => {
        ws.onmessage = (e) => {
            console.log(JSON.parse(e.data));
        };
    });

    return (
        <div>
            {TRACKED_CURRENCY.map((currency) => {
                return <CryptoItem key={currency.slice(0, -9)} />;
            })}
        </div>
    );
}
