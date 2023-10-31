const container:HTMLElement | null = document.getElementById("container");

const renderData = async ():Promise<void> => {
    let uri:RequestInfo = "./assets/data/expenses.json";

    try {
        const response:Response = await fetch(uri);
        if (!response.ok) {
            throw new Error("We are unable to fetch your data at this time.");
        }

        const expenses:any[] = await response.json();
        console.log(expenses);

        let highestAmount:number = 0;

        expenses.forEach(expense => {

            const visualization: HTMLElement | null = document.createElement("div");
            visualization.classList.add("visualization");

            const label:HTMLElement | null = document.createElement("span");
            label.classList.add("label", "hidden");
            label.innerText = `$${expense.amount}`

            const chat:HTMLElement | null = document.createElement("div");
            chat.classList.add("chat");
            chat.style.height = `${expense.amount * 3}px`;
            console.log(`${expense.amount * 3}px`);

            const day:HTMLElement | null = document.createElement("span");
            day.classList.add("day");
            day.innerText = expense.day;

            visualization.append(label, chat, day);

            container?.append(visualization);

            chat.addEventListener("mouseenter", () => {
                label.classList.remove("hidden");
            });
            chat.addEventListener("mouseleave", () => {
                label.classList.add("hidden");
            });

            if (expense.amount > highestAmount) {
                highestAmount = expense.amount;
            }
            
            // if (chatWithHighestAmount === `${highestAmount * 3}px`) {
            //     chat.style.backgroundColor = "blue";
            // }

        });

        console.log(`Highest expense: ${highestAmount * 3}px`);
        

    } catch (error) {
        console.error("An error occurred:", error);
    }

}

renderData();
