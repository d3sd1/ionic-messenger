import { User } from "./User";
import { Image } from "./Image";
import { Game } from "./Game";
import { Business } from "./Business";

export class Helper {
    static users: User[] = [
        new User("Melánie Uaithne", "https://res.cloudinary.com/cediim8/image/upload/v1524803837/person_9.jpg"),
        new User("Fabiano Avaline", "https://res.cloudinary.com/cediim8/image/upload/v1524803836/person_11.jpg"),
        new User("Jesse Konstantin", "https://res.cloudinary.com/cediim8/image/upload/v1524803836/person_6.jpg"),
        new User("Kori Liam", "https://res.cloudinary.com/cediim8/image/upload/v1524803836/person_7.jpg"),
        new User("Anselme Becca", "https://res.cloudinary.com/cediim8/image/upload/v1524803837/person_8.jpg"),
        new User("Shankar Chyna", "https://res.cloudinary.com/cediim8/image/upload/v1524803837/person_10.jpg"),
        new User("Corné Ricarda", "https://res.cloudinary.com/cediim8/image/upload/v1524803838/person_17.jpg"),
        new User("Waheed Madelief", "https://res.cloudinary.com/cediim8/image/upload/v1524803838/person_13.jpg"),
        new User("Shreya Cat", "https://res.cloudinary.com/cediim8/image/upload/v1524803838/person_16.jpg"),
        new User("Apoorva Hunter", "https://res.cloudinary.com/cediim8/image/upload/v1524803837/person_14.jpg"),
        new User("Brigitta Phyllis", "https://res.cloudinary.com/cediim8/image/upload/v1524803838/person_15.jpg"),
        new User("Jiro Gawdat", "https://res.cloudinary.com/cediim8/image/upload/v1524803839/person_12.jpg"),
        new User("Vasundhara Alesia", "https://res.cloudinary.com/cediim8/image/upload/v1524803839/person_2.jpg"),
        new User("Emmy Daragh", "https://res.cloudinary.com/cediim8/image/upload/v1524803840/person_20.jpg"),
        new User("Wilson Salil", "https://res.cloudinary.com/cediim8/image/upload/v1524803839/person_18.jpg"),
        new User("Irène Shahid", "https://res.cloudinary.com/cediim8/image/upload/v1524803840/person_4.jpg"),
        new User("Rien Benjamín", "https://res.cloudinary.com/cediim8/image/upload/v1524803839/person_19.jpg"),
        new User("Kriemhilde Amando", "https://res.cloudinary.com/cediim8/image/upload/v1524803840/person_5.jpg"),
        new User("Quinn Encarna", "https://res.cloudinary.com/cediim8/image/upload/v1524803840/person_3.jpg"),
        new User("Kristel Cornelia", "https://res.cloudinary.com/cediim8/image/upload/v1524803840/person_1.jpg")
    ];

    static images: Image[] = [
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-170894-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094006/newsfeed/pexels-photo-462867-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-775219-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-595808-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-724643-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094585/market%20place/pexels-photo-276534-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-100582-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-248528-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-147641-min.jpg"),
        new Image("https://res.cloudinary.com/cediim8/image/upload/v1521094586/market%20place/pexels-photo-139167-min.jpg"),
    ];

    static games: Game[] = [
        new Game("Words with Friends", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/words-with-friends.png"),
        new Game("The Test", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/the-test.png"),
        new Game("4 Pics 1 Word", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/4-pics-1-word.png"),
        new Game("EverWing", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/everwing.png"),
        new Game("8 Ball Pool", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/8-ball-pool.png"),
        new Game("UNO", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/uno.png"),
        new Game("Gold Boot", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/golden-boot.png"),
        new Game("Cookie Crush", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/cookie-crush.png"),
        new Game("Solitaire", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/solitaire.png"),
        new Game("Chess", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/chess.png")
    ];

    static featuredBusinesses: Business[] = [
        new Business("Pinterest", "Find and Share new ideas to try.", "https://res.cloudinary.com/cediim8/image/upload/v1525218574/pinterest.png"),
        new Business("Rendezvous Recommendations", "Get social recommendations from friends", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/rendezvous.png"),
        new Business("Machaao", "Ganglia, Your Personal Cricket Assistant", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/machaao.png"),
    ];

    static popularBusinesses: Business[] = [
        new Business("ABC News", "Breaking news - and what happens next", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/abc-news.png"),
        new Business("Qantas", "Your destination for travel inspiration", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/qantas.png"),
        new Business("Optus Perks", "Win instant and chance to win prizes.", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/optus_perks.png"),
        new Business("Weatherzone", "Weatherzone is Australia's largest private weather forecaster", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/weatherzone.png"),
        new Business("Toby - Tigerair Australia", "Tigerair's new interactive chatbot", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/tiger-air.png"),
        new Business("QUT (Queensland University of Technology)", "This is the official page for QUT", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/qut.png"),
    ];

    static educationBusinesses: Business[] = [
        new Business("QUT (Queensland University of Technology)", "This is the official page for QUT", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/qut.png"),
        new Business("Flight Centre Travel Academy", "Want to start a career in travel?", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/flight-centre.png"),
        new Business("BotWhy", "Why would you even want health insurance?", "https://res.cloudinary.com/cediim8/image/upload/v1525221974/botwhy.png"),
        new Business("Christopher Bot", "Christopher Bot is the solution!", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/christopher-bot.png"),
        new Business("The Growth Academy", "From idea to business in just 90 days", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/growth-academy.png"),
        new Business("Tommy Bot", "Tommy Bot is a Facebook Messenger chatbot", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/tommy-bot.png")
    ];

    static homeAndAutoBusinesses: Business[] = [
        new Business("1 Property Center", "Properties for sale in Queensland", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/property-1.png"),
        new Business("The Lazy Cat", "Stylish and comfy cat beds and accessories", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/lazy-cat.png"),
        new Business("Doorsteps", "Building a better rental experince", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/doorsteps.png"),
        new Business("Living Water Designs", "We build custom water features also DIY", "https://res.cloudinary.com/cediim8/image/upload/v1525221973/living-water-designs.png"),
        new Business("Messenger", "Messenger is the best way to communicate!", "https://res.cloudinary.com/cediim8/image/upload/v1525221972/messenger.png"),
    ];

    static businessCategories: string[] = [
        "Education",
        "Entertainment",
        "Finance",
        "Food & Drinks",
        "Health and Fitness",
        "Home & Auto",
        "Lifestyle",
        "News",
        "Productivity",
        "Religion & Spirituality",
        "Shopping",
        "Sports",
        "Travel"
    ];

    static shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    static randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}