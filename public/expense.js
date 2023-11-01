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
            const label = document.createElement("span");
            label.classList.add("label", "hidden");
            label.innerText = `$${expense.amount}`;
            const barContainer = document.createElement("div");
            barContainer.classList.add("barContainer");
            const chat = document.createElement("div");
            chat.classList.add("chat");
            chat.style.height = `${expense.amount}%`;
            chat.style.width = `${100}%`;
            console.log(chat.style.height);
            const day = document.createElement("span");
            day.classList.add("day");
            day.innerText = expense.day;
            chat.append(label);
            barContainer.append(chat);
            visualization.append(barContainer, day);
            container === null || container === void 0 ? void 0 : container.append(visualization);
            chat.addEventListener("mouseenter", () => {
                label.classList.remove("hidden");
            });
            chat.addEventListener("mouseleave", () => {
                label.classList.add("hidden");
            });
            const keyToExtract = "amount";
            const valuesArray = [];
            for (const item of expenses) {
                if (item.hasOwnProperty(keyToExtract)) {
                    valuesArray.push(item[keyToExtract]);
                }
            }
            ;
            const highestValue = Math.max(...valuesArray);
            if (chat.style.height === `${highestValue}%`) {
                chat.classList.add("highestBar");
            }
        });
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
});
renderData();
