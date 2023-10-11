import { makeAutoObservable } from "mobx";

class TestStore {
  testList = [
    {
      id: 1,
      name: "Оргтехника1",
      test_img: "https://diamondhand.ru/util/image/orgtehnika-big.png",
      description:
        "1sddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    },
    {
      id: 2,
      name: "Автомобили",
      test_img: "https://inbusiness.kz/uploads/31/images/BcjmSeW9.jpg",
      description:
        "2dsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    },
  ];

  question = [
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
    {
      id: "4",
      test_id: 1,
      question: "Лучший производитель наушников",
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
    this.testList.push(test);
  }

  removeTest(test_id) {
    this.testList = this.testList.filter((test) => test.id !== test_id);
  }

  addQuestion(question) {
    this.testList.push(question); //почему в testList a не в questions??
  }

  removeQuestion(question_id) {
    this.testList = this.testList.filter(
      (question) => question.id !== question_id
    );
  }

  addAnswer(question_id, answer) {
    this.testList.map((question) => {
      if (question.id === question_id) {
        return question.answers.push(answer);
      }

      return question;
    });
  }

  removeAnswer(question_id, answer_id) {
    this.testList.map((question) => {
      //мар - для каждого элемента массива
      if (question.id === question_id) {
        return (question.answers = question.answers.filter(
          (answer) => answer.id !== answer_id
        ));
      }
      return question;
    });
  }
}

export default TestStore;
