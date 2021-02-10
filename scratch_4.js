function school(name, minYears) {
    if (!name || !name.trim()) {
      throw new Error("Не указано название школы");
    }
  
    if (!minYears || !parseInt(minYears)) {
      throw new Error("Не указано минимальное количество лет");
    }
  
    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;
  
    this.checkAge = function (age) {
      if (age < this.MIN_YEARS) {
        return {
          result: false,
          message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`,
        };
      } else {
        return {
          result: true,
          message: `Добро пожаловать в автошколу ${this.SCHOOL_NAME}`,
        };
      }
    };
  
    this.getTeacherList = function () {
      return [
        "А. С. Иванов",
        "В. С. Петров",
        "И. А. Сидоров",
      ];
    }
  
    this.getTeacher = function (id) {
      return this.getTeacherList()[id];
    };
  
    this.welcome = function (name, years) {
      const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';
  
      name = name || prompt('Как вас зовут?');
  
      if (!name) {
        alert('Вы не указали имя!');
        return this.welcome(name, years);
      }
  
      years = years || Math.abs(parseInt(prompt('Укажите ваш возраст')));
  
      if (!years) {
        alert('Вы не указали возраст!');
        return this.welcome(name, years);
      }
  
      if (this.checkAge(years).result) {
        alert(`Добро пожаловать в автошколу ${this.SCHOOL_NAME}`);
      } else {
        return alert(this.checkAge(years).message);
      }
  
      const TEACHER_NAME = this.getTeacher(0);
  
      alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`);
    };
  
  }
  
  let autoSchool = new school('Парус', 18);
  
  autoSchool.welcome();
  autoSchool.welcome("Тест");
  autoSchool.welcome("", 15);
  autoSchool.welcome("Тест", 16);
  autoSchool.welcome("Тест", 18);