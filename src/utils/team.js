import person1 from "../assets/person-1.webp"
import person2 from "../assets/ageev.png"
import person3 from "../assets/person-3.jpeg"

const team = [
  {
    id: 1,
    name: "Георгий Гурьянов",
    title: "Главный тренер",
    image: person1,
    featured: [
      "15 лет опыта",
      "Чемпион мира по хоккею",
      "Педагогическое образование",
    ],
  },
  {
    id: 2,
    name: "Иван Агеев",
    title: "Тренер по вратарям",
    image: person2,
    featured: [
      "Призер Чемпионата России",
      "Привлекался в юниорскую сборную",
      "Призер Чемпионата Москвы",
    ],
  },
  {
    id: 3,
    name: "Дмитрий Спирин",
    title: "Тренер по подкаткам",
    image: person3,
    featured: [
      "Опыт тренерской работы более 5 лет",
      "Играл в ХК Салават Юлаев",
      "Педагогическое образование",
    ],
  },
]
export default team
