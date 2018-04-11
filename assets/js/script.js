$(document).ready(function(){
	 $("#myContent").carousel();
	 $("#content-slider").lightSlider({
	    item:4,
        auto:true,
        loop:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:900,
        pager: false,
        responsive : [
            {
                breakpoint:991,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:767,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
	  });
	 $("#application").lightSlider({
	    item:4,
        auto:false,
        loop:true,
        slideMove:8,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:1000,
        pager: false,
        responsive : [
            {
                breakpoint:991,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:767,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
	  });






     var arrLang = {

        /*##################################
                      MENU
        ####################################*/
        'en':{
           'home' : 'Home',
           'who' : 'Who we are',
           'where' : 'Where we are',
           'plantations' : 'Our plantations',
           'process' : 'Our process',
           'applications' : 'Our applications',
           'people' : 'Our people',

            /*------------main2--------------*/
           'country' : 'Language',
           'corporate' : 'Corporate Profile',
           'inc' : 'FIBERS TRADING INC',
           'success' : 'PASSION FOR SUCCESS',
           'trade' : 'FIBERS TRADING INC. aspires to be the most reliable and robust abaca supplier in the Philippines. Our strategic sourcing positions make our production cost-effective while ensuring consistent quality of abaca fiber.',
           'focus' : 'CUSTOMER FOCUS',
           'for' : 'PASSION FOR SUCESS',
           'pro' : 'PROFESSIONALISM',
           'inte' : 'INTEGRITY',
           'quality' : 'CONSISTENT QUALITY',
           'team' : 'TEAM WORK',
            /*------------main3--------------*/
           'first' : 'This company is the best. I am so happy with the result!',
           'pha' : 'Michael Roe, Vice President, Comment Box',
           'second' : 'This company is the best. I am so happy with the result!',
           'pha2' : 'Michael Roe, Vice President, Comment Box',
           'third' : 'This company is the best. I am so happy with the result!',
           'cthird' : 'Michael Roe, Vice President, Comment Box',
            /*------------main4--------------*/
           
           'main' : 'Maintenance',
           'pack' : 'Packaging',
           'inter' : 'Internal transport',
           'exp' : 'Exportation',
           'cum1' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta itaque autem esse cupiditate nam magnam, temporibus, velit ut eos quis.',
           'cumaser2' : 'Cumaser kertyases',
           'cum2' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta itaque autem esse cupiditate nam magnam, temporibus, velit ut eos quis.',

             /*------------footer--------------*/
           'infor' : 'Information',
           'us' : 'About Us',
           'use' : 'Terms of Use',
           'privacy' : 'Privacy Policy',
           'hours' : 'Opening Hours',
           'adver' : 'Advertise with Us',
           'contact' : 'Contact Us',
           'net' : 'Social network',
           'social' : 'Find us on these social network sites',
           'loc' : 'Location',
           'copy' : 'Copyright',
          
        },
        'spn':{
           'home' : 'Casa',
           'who' : 'Quienes somos',
           'where' : 'Donde estamos',
           'plantations' : 'Nuestras plantaciones',
           'process' : 'Nuestro proceso',
           'applications' : 'Nuestras aplicaciones',
           'people' : 'Nuestra gente',
           /*------------main2--------------*/
           'country' : 'Idioma',
           'corporate' : 'Perfil Corporativo',
           'inc' : 'FIBRAS TRADING INC',
           'success' : 'PASIÓN POR EL ÉXITO',
           'trade' : 'FIBERS TRADING INC. Aspira a ser el proveedor de abacá más confiable y robusto de Filipinas. Nuestras posiciones de abastecimiento estratégico hacen que nuestra producción sea rentable, al tiempo que se garantiza la calidad constante de la fibra de abacá.',
           'focus' : 'ENFOQUE EN EL CLIENTE ',
           'for' : 'PASIÓN POR EL ÉXITO',
           'pro' : 'PROFESIONALISMO',
           'inte' : 'INTEGRIDAD',
           'quality' : 'CALIDAD CONSISTENTE',
           'team' : 'TRABAJO EN EQUIPO',

           /*------------main3--------------*/
           'first' : 'Esta empresa es la mejor Estoy muy feliz con el resultado!',
           'pha' : 'Michael Roe, Vicepresidente, Cuadro de Comentarios',
           'second' : 'Esta empresa es la mejor Estoy muy feliz con el resultado!',
           'pha2' : 'TRABAJO EN EQUIPO',
           'third' : 'TRABAJO EN EQUIPO',
           /*------------main4--------------*/
           
           'main' : 'Mantenimiento',
           'pack' : 'Embalaje',
           'inter' : 'Transporte interno',
           'exp' : 'Exportación',
           'cum1' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta itaque autem esse cupiditate nam magnam, temporibus, velit ut eos quis.',
           'cumaser2' : 'Cumaser kertyases',
           'cum2' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta itaque autem esse cupiditate nam magnam, temporibus, velit ut eos quis.',
          
            /*------------footer--------------*/
           'infor' : 'Información',
           'us' : 'Sobre nosotros',
           'use' : 'Términos de Uso',
           'privacy' : 'Política de privacidad',
           'hours' : 'Publicidad con nosotros',
           'adver' : 'Publicidad con nosotros',
           'contact' : 'Contáctenos',
           'net' : 'Red social',
           'social' : 'Encuéntranos en estos sitios de redes sociales',
           'loc' : 'Ubicación',
           'copy' : 'Derechos de autor',
           


        },
        'jpn':{
           'home' : 'ホーム',
           'who' : '私たちは誰ですか',
           'where' : '私たちがいるところ',
           'plantations' : '私たちのプランテーション',
           'process' : '私たちのプロセス',
           'applications' : '当社のアプリケーション',
           'people' : '私たちの人々',
           
            /*------------main2--------------*/
           'country' : '言語',
           'success' : '成功のための情熱',
           'trade' : 'FIBERS TRADING INC。は、フィリピンで最も信頼性が高く丈夫なabacaサプライヤーを目指しています。 当社の戦略的な調達ポジションは、生産コストを削減しつつ、アバカ繊維の品質を一定に保ちます。',
           'focus' : '顧客の焦点',
           'for' : '成功のための情熱',
           'pro' : 'プロフェッショナル',
           'inte' : '不動産',
           'quality' : '安定した品質',
           'team' : 'チームワーク',
            /*------------main3--------------*/
           'first' : 'この会社は最高です。 私は結果に非常に満足しています！',
           'pha' : 'Michael Roe、副社長、コメント欄',
           'second' : 'この会社は最高です。 私は結果に非常に満足しています！',
           'pha2' : 'Michael Roe、副社長、コメント欄',
           'third' : 'この会社は最高です。 私は結果に非常に満足しています！',
           'cthird' : 'Michael Roe、副社長、コメント欄',
           /*------------main4--------------*/
           
           'main' : 'メンテナンス',
           'pack' : 'パッケージング',
           'inter' : '内部輸送',
           'exp' : '輸出',
           'cum1' : 'L私はリベートconsectetur、AMET座るイプサムの嘆きに祈ります。それゆえ、存在することが、偉大な、時代の解放、願望である、と彼はそのうち、それらを持っていることを望みます。',
           'cumaser2' : 'Cumaser kertyases',
           'cum2' : 'Loremのイプサムの嘆き、AMET consecteturのadipiscingのELIT座ります。それゆえ、存在することが、偉大な、時代の解放、願望である、と彼はそのうち、それらを持っていることを望みます。',
              /*------------footer--------------*/
           'infor' : '情報',
           'us' : '私たちに関しては',
           'use' : 'T利用規約',
           'privacy' : '個人情報保護方針',
           'hours' : '営業時間',
           'adver' : '広告掲載のご案内',
           'contact' : 'お問い合わせ',
           'net' : 'ソーシャルネットワーク',
           'social' : 'これらのソーシャルネットワークサイトで私たちを見つける',
           'loc' : 'ロケーション',
           'copy' : '著作権',

        }



     };

     $(function(){

        $('.translate').click(function(){
             var lang = $(this).attr('id');


             $('.lang').each(function(index, element){
                $(this).text(arrLang[lang][$(this).attr('key')]);

             });


        });
      
     });



});