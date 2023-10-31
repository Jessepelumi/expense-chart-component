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


        expenses.forEach(expense => {

            const visualization: HTMLElement | null = document.createElement("div");
            visualization.classList.add("visualization");

            const chat:HTMLElement | null = document.createElement("div");
            chat.classList.add("chat");
            chat.style.height = expense.amount + "px";

            const day:HTMLElement | null = document.createElement("span");
            day.classList.add("day");
            day.innerText = expense.day;
        });

    } catch (error) {
        console.error("An error occurred:", error);
    }

}

renderData();
