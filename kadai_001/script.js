$(function(){
  /* ------------------------ 
  メインビジュアル　カルーセル
  ------------------------- */
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    //次の画像に移るスピード
    dots: true,
    infinite: true,
    speed: 1000,
    //フェードするスピード
    fade: true,
    cssEase: 'linear',
    //イージング（動きの加減速）:リニア（等速）
  });

  /* ------------------------ 
  ナビゲーション　ホバーで透過の変化
  -------------------------- */
  $('#header-title,.navList').hover(
    function(){
    $(this).css({
      opacity: '0.5',
      transition: '0.5s',
      });
    },
    function(){
    $(this).css({
       opacity:'1',
       transition: '0.5s'
       });
  });

  /* ------------------------ 
  TOPに戻るボタン　スクロールで出現
  -------------------------- */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $('#scrollButton').css({
        opacity: '1',
        transition: '0.5s'})
      } else {
      $('#scrollButton').css({
        opacity: '0',
        transition: '0.5s'})
      }
  });

  /* ------------------------ 
  ページ内リンク　なめらかに移動
  -------------------------- */
  $('a[href^="#"]').click(function(){
    let target = $($(this).attr('href')).offset().top;
    //その要素のhrefの値が、topからいくつなのかという位置情報を取得し、targetに代入
    $('html,body').animate({scrollTop : target}, 500);
  });
    
  /* ------------------------ 
  セクション　スクロールでフェードイン
  -------------------------- */
  $(window).scroll(function(){
    const windowScroll = $(window).scrollTop(); //上からの距離
    const windowHeight = $(window).height();    //画面の高さ
    $('section').each(function(){
      const sectionPosition = $(this).offset().top;//セクションの上からの高さ
      if(windowScroll > windowHeight - sectionPosition + 200) {
        $(this).addClass('fadeIn')
      }
    }); 
  });
  /* addClass('fadeIn') 　が、　about → works　の順についてくれず、
     works に先にクラスが付与されて、その後に　about にクラスが付与されます。
     どうしてなのでしょうか?　*/







    
  


    
    

  


  
});