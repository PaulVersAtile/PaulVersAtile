const header = document.getElementById('header');

$(document).ready(function () {
  $(window).scroll(function () {
    // section-stack
    const sectionStackTop = $('#section-stack').offset().top;
    const sectionStackHeight = $('#section-stack').outerHeight();

    // competitions
    const competitionsTop = $('#competitions').offset().top;
    const competitionsHeight = $('#competitions').outerHeight();

    // contacts
    const contactsTop = $('#contacts').offset().top;
    const contactsHeight = $('#contacts').outerHeight();

    // section-form
    const sectionFormTop = $('#section-form').offset().top;
    const sectionFormHeight = $('#section-form').outerHeight();

    const windwowHeight = $(window).height();
    const windowScroll = $(this).scrollTop();
    const headerHeight = $('#header').height() * 2.5;

    if (windowScroll <= sectionStackTop + sectionStackHeight - headerHeight) {
      $('#header').removeClass('header-grey').addClass('header-white');
      $('#header > nav > a').removeClass('header-grey').addClass('header-white');
    }
    if (
      windowScroll > sectionStackTop + sectionStackHeight - headerHeight &&
      windowScroll <= competitionsTop + competitionsHeight - headerHeight
    ) {
      $('#header').removeClass('header-white').removeClass('header-dark').addClass('header-grey');
      $('#header > nav > a').removeClass('header-white').removeClass('header-dark').addClass('header-grey');
      $('#logo').removeClass('logo-white').addClass('logo-color');
      $('#burger-icon').removeClass('burger-white').addClass('burger-color');
    }
    if (
      windowScroll > competitionsTop + competitionsHeight - headerHeight &&
      windowScroll <= contactsTop + contactsHeight - headerHeight
    ) {
      $('#header').removeClass('header-white').removeClass('header-grey').addClass('header-dark');
      $('#header > nav > a').removeClass('header-white').removeClass('header-grey').addClass('header-dark');
      $('#logo').removeClass('logo-color').addClass('logo-white');
      $('#burger-icon').removeClass('burger-color').addClass('burger-white');
    }
    if (
      windowScroll > contactsTop + contactsHeight - headerHeight &&
      windowScroll <= sectionFormTop + sectionFormHeight - headerHeight
    ) {
      $('#header').removeClass('header-dark').addClass('header-white');
      $('#header > nav > a').removeClass('header-dark').addClass('header-white');
      $('#logo').removeClass('logo-white').addClass('logo-color');
      $('#burger-icon').removeClass('burger-white').addClass('burger-color');
    }
  });

  $('#for-machine-learning').attr('data-selected', true).find('.skill').addClass('enter');

  $('#list>span').click(function () {
    // Получаем ID элемента, который был нажат
    var selectedId = $(this).attr('id');
    var targetArticle = $('#for-' + selectedId);
    var previoslySelectedArticle = $('#list span.active').removeClass('active');
    $(this).addClass('active');
    // Убираем класс enter у всех элементов перед анимацией
    $('article.skills[data-selected]')
      .children('span')
      .each(function (index) {
        $(this).queue(function (next) {
          $(this).removeClass('enter');
          next();
        });
      });
    // Запускаем анимацию
    targetArticle.find('.skill').each(function (index) {
      $(this)
        .delay(index)
        .queue(function (next) {
          // Задержка для последовательного появления
          $(this).addClass('enter'); // Добавляем класс visible
          next(); // Переход к следующему элементу в очереди
        });
    });
    targetArticle.attr('data-selected', true);
  });
});

$(document).ready(function () {
  const $sidebar = $('#sidebar');

  // Функция для показа и скрытия сайдбара
  function toggleSidebar(show) {
    if (show) {
      $sidebar.removeClass('hide-sidebar').addClass('show-sidebar');
    } else {
      $sidebar.removeClass('show-sidebar').addClass('hide-sidebar');
    }
  }

  // Начальное состояние сайдбара
  toggleSidebar(false);

  // Обработчик клика для бургер-иконки
  $('#burger-icon').on('click', function () {
    toggleSidebar(true);
  });

  // Обработчик кликов для закрытия сайдбара
  $('#cross, #sidebar-stack, #sidebar-competitions, #sidebar-contacts').on('click', function () {
    toggleSidebar(false);
  });

  // Обработчик клика для перехода к форме
  $('#go-to-form').on('click', function () {
    toggleSidebar(false);
    $('#form')[0].scrollIntoView();
  });

  document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 15) {
      $('#header').removeClass('header-next');
    }
    if (scrollTop > 15) {
      $('#header').addClass('header-next');
    }
  });

  document.addEventListener('scroll', function () {
    const scrollTop = document.documentElement.scrollTop;
    const ball = $('#ball');

    // Удаляем все классы
    ball.removeClass('first-place-ball second-place-ball third-place-ball fourth-place-ball');

    // Определяем класс на основе scrollTop
    if (scrollTop < 1) {
      ball.addClass('first-place-ball');
    } else if (scrollTop < 500) {
      ball.addClass('second-place-ball');
    } else if (scrollTop < 800) {
      ball.addClass('third-place-ball');
    } else {
      ball.addClass('fourth-place-ball');
    }
  });
});

$(document).ready(function () {
  // Общая функция для обработки кликов
  function handleServiceClick(selectedId, container) {
    // Убираем активный класс у всех активных элементов
    $(`${container} > p.active-service`).removeClass('active-service').addClass('inactive-service');

    // Добавляем активный класс к выбранному элементу
    $(`#${selectedId}`).addClass('active-service').removeClass('inactive-service');
  }

  // Обработчик кликов для элементов с классом services
  $('#services > p').on('click', function () {
    handleServiceClick(this.id, '#services');
  });

  // Обработчик кликов для элементов с классом budget
  $('#budget > p').on('click', function () {
    handleServiceClick(this.id, '#budget');
  });
});
