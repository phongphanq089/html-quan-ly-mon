

document.addEventListener('DOMContentLoaded', function () {
  const tabItems = document.querySelectorAll('.tab-change__table .nav-item');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (tabItems.length <= 2) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    $('.tab-change__table').css("justify-content", "center");
  }
});

const ProductNews = () => {
  $('.wrapTableItem.selected').on('click', function () {
    $('.wrapNoProduct').show()
  })
  $('.btnAddProduct').on('click', function () {
    $('.wrapProduct').show()
    $('.wrapNoProduct').hide()
  })

  $('.wrapCart').on('click', function () {
    $('.wrapListOrderNew').show()
    $('.wrapNoProduct').hide()
  })

  $('.confirm').on('click', function () {
    $('.wrapListOrderNew').hide()
    $('.wrapOrderSuccsess').show()
    setTimeout(() => {
      $('.wrapOrderSuccsess').hide()
      $('.wrapListOrderSelected').show();
    }, 2000);
  })
  $('.add-product').on('click', function () {
    $('.wrapListOrderSelected').hide();
    $('.wrapCallOrderNew ').show()
  })
}

const productSelected = () => {
  $('.wrapHeading').on('click', function () {
    $('.wrapListOrderSelected').hide();
    $('.wrapCallOrderNew').hide()
    $('.wrapListOrderNew').hide()
    // $('.wrapProduct').hide()
    $('.wrapReportPrinting').hide()
  })

  $('.wrapTableItem').on('click', function () {
    if ($(this).hasClass('selected')) {

      $('.wrapNoProduct').show();
    } else {

      $('.wrapListOrderSelected').show();
    }
  });
  $('.print-order').on('click', function () {
    $('.wrapReportPrinting').show()
    $('.wrapListOrderSelected').hide();
    setTimeout(() => {
      $('.wrapReportPrinting').hide()
    }, 2000);
  });
}

const customStyleMobile = () => {
  var heightBottomBar = $('.wrapBottomBarMenu').height()
  var heightBottomMobile = $('.wrapBottomMobile').height()
  var heightFooterOrderNew = $('.wrapListOrderNew .wrapFooter').height()
  $('.wrapBottomMobile').css("bottom", heightBottomBar + 30 + "px");

  if ($(window).width() < 992) {
    $('.wrapListProductContent').css("padding-bottom", heightBottomBar + heightBottomMobile + 200 + "px");
    $('.wrapProductCategory .wrapListProduct').css("padding-bottom", heightBottomBar + heightBottomMobile + 200 + "px");
    $('.wrapListOrderNew .wrapFooter').css("padding-bottom", heightBottomBar + 30 + "px");
    $('.wrapListOrderNew .wrapContent').css("padding-bottom", heightBottomBar + heightFooterOrderNew + 200 + "px");
    $('.wrapListOrderSelected .wrapContent').css("padding-bottom", heightBottomBar + heightFooterOrderNew + 300 + "px");
    $('.wrapListOrderSelected .wrapFooter').css("bottom", heightBottomBar + 30 + "px");
  }
}

$(window).on('load', function () {

  ProductNews()
  productSelected()
  customStyleMobile()

  $('body').removeClass('loadingPage')
})