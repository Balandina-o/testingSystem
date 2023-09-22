import { makeAutoObservable } from "mobx";

class TestStore {
  tests = [
    {
      id: 1,
      name: "Оргтехника",
      test_img: "https://diamondhand.ru/util/image/orgtehnika-big.png",
    },
    {
      id: 2,
      name: "Автомобили",
      test_img: "https://inbusiness.kz/uploads/31/images/BcjmSeW9.jpg",
    },
  ];
  questions = [
    {
      id: "1",
      test_id: 1,
      question: "Лучший производитель клавиатур",
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
    {
      id: "2",
      test_id: 1,
      question: "Лучший производитель компьтерных мышей",
      image:
        "https://static.ru-mi.com/upload/resize_cache/iblock/12b/440_440_1/5k482c2rh32642q1v2vddbzksq67cwla.jpeg",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
    {
      id: "3",
      test_id: 1,
      question: "Лучший производитель мониторов",
      image:
        "https://avatars.mds.yandex.net/get-mpic/3614670/img_id6299576373330854786.jpeg/orig",
      answers: [
        {
          id: "1",
          name: "Toshiba",
        },
        {
          id: "2",
          name: "Genius",
        },
        {
          id: "3",
          name: "Acer",
        },
        {
          id: "4",
          name: "Dell",
        },
      ],
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }

  addTest(test) {
    this.tests.push(test);
  }

  removeTest(test_id) {
    this.tests = this.tests.filter((test) => test.id !== test_id);
  }

  addQuestion(question) {
    this.tests.push(question); //почему в tests a не в questions??
  }

  removeQuestion(question_id) {
    this.tests = this.tests.filter((question) => question.id !== question_id);
  }

  addAnswer(question_id, answer) {
    this.tests.map((questions) => {
      if (question.id == question_id) {
        return question.answers.push(answer);
      }

      return questions;
    });
  }

  removeAnswer(question_id, answer_id) {
    this.tests.map((questions) => {
      //мар - для каждого элемента массива
      if (question.id == question_id) {
        return (question.answers = question.answers.filter(
          (answer) => answer.id !== answer_id
        ));
      }
      return questions;
    });
  }
}
