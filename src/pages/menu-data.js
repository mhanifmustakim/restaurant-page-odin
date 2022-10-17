import BrowniesImage from "/src/Images/Brownies.jpg";
import BatikCakeImage from "/src/Images/Batik-Cake.jpg";
import CrepeCakeImage from "/src/Images/Crepe-Cake.jpg";
import HorseShoeCakeImage from "/src/Images/Horseshoe-Cake.jpg";
import YogurtIceCreamImage from "/src/Images/Yogurt-Ice-Cream.jpg";
import IceCreamConeImage from "/src/Images/Ice-Cream-Cone.jpg";
import CoatedIceCreamImage from "/src/Images/Coated-Ice-Cream.jpg";
import AvocadoIceCreamImage from "/src/Images/Avocado-Ice-Cream.jpg";
import ChocolateTrufflesImage from "/src/Images/Chocolate-Truffles.jpg";
import GummyEyeballsImage from "/src/Images/Gummy-Eyeballs.jpg";

const data = [
    {
        type: "Cakes",
        items: [
            {
                img: BrowniesImage,
                name: "Brownies"
            },
            {
                img: BatikCakeImage,
                name: "Batik Cake"
            },
            {
                img: CrepeCakeImage,
                name: "Crepe Cake"
            },
            {
                img: HorseShoeCakeImage,
                name: "Horseshoe Cake"
            },
        ]
    },
    {
        type: "Ice Creams",
        items: [
            {
                img: YogurtIceCreamImage,
                name: "Yogurt Ice Cream"
            },
            {
                img: IceCreamConeImage,
                name: "Ice Cream Cone"
            },
            {
                img: CoatedIceCreamImage,
                name: "Coated Ice Cream"
            },
            {
                img: AvocadoIceCreamImage,
                name: "Avocado Ice Cream"
            },
        ]
    },
    {
        type: "Chocolate & Candies",
        items: [
            {
                img: ChocolateTrufflesImage,
                name: "Chocolate Truffles"
            },
            {
                img: GummyEyeballsImage,
                name: "Gummy Eyeballs"
            }
        ]
    },
]

export default data