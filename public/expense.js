"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.getElementById("container");
const renderData = () => __awaiter(void 0, void 0, void 0, function* () {
    let uri = "./assets/data/expenses.json";
    try {
        const response = yield fetch(uri);
        if (!response.ok) {
            throw new Error("We are unable to fetch your data at this time.");
        }
        const expenses = yield response.json();
        console.log(expenses);
        expenses.forEach(expense => {
            const visualization = document.createElement("div");
            visualization.classList.add("visualization");
            const chat = document.createElement("div");
            chat.classList.add("chat");
            chat.style.height = expense.amount + "px";
            const day = document.createElement("span");
            day.classList.add("day");
            day.innerText = expense.day;
        });
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
});
renderData();
