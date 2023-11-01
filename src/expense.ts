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

            const barContainer:HTMLElement | null = document.createElement("div");
            barContainer.classList.add("barContainer");

            const chat:HTMLElement | null = document.createElement("div");
            chat.classList.add("chat");
            chat.style.height = `${expense.amount}%`;
            chat.style.width = `${100}%`
            //console.log(`${expense.amount}%`);
            console.log(chat.style.height);
            

            const day:HTMLElement | null = document.createElement("span");
            day.classList.add("day");
            day.innerText = expense.day;

            chat.append(label);
            barContainer.append(chat);
            visualization.append(barContainer, day);

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
            if (chat.style.height === `${highestAmount}%`) {
                chat.style.backgroundColor = "blue";
            }
            

            console.log(chat.style.height === `${highestAmount}%`);
        });

        console.log(`Highest expense: ${highestAmount}%`);
        
        

    } catch (error) {
        console.error("An error occurred:", error);
    }

}

renderData();
