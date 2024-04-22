import { robots } from "./robots";

export const getRobotByid = (id='009') =>{
    return robots.find((robot) => {
        return robot.id === id;
    })
}

export const getRobotBySeries = (series = 2) =>{
    return robots.find((robot) => {
        return robot.series === series;
    })
}

export const createCard = (data) => {
    const card = `<div class="col-lg-4 col-md-6 mb-4">
        <div> class="card">
        <img src ="${data.avatar|| data.imagen}" class="card-img-top alt="${data.name}">
        <div> class="card-body">
                <h5 class="card-tittle">${data.name}</5>
                <p class="card-text">Weapon/type: ${data.weapon}</p> 
            </div> 
        </div>
    </div>
    `;
    return card;
};
const renderCards =(data,containerId) => {
    const container = document.getElementById(containerId);
    data.forEach(item=> {
        container.innerHTML+=createCard(item);
    });
}
