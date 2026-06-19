/*Китептер*/
const BOOKS = [
  { id:'u1', title:{ky:'Кыргыз тили. 5-класс',ru:'Кыргызский язык. 5 класс'}, author:'Н.С.Жусупбекова', price:380, category:'study', cover:'#1c3d5a', image:'images/кыргыз тили.png', badge:{ky:'Окуу',ru:'Учебник'}, pages:240, format:'hard' },
  { id:'u2', title:{ky:'Математика. 6 класс',ru:'Математика. 6 класс'}, author:'А.Бекбоев', price:420, category:'study', cover:'#2a5278', image:'images/математика 6 класс.jpg', pages:280, format:'hard' },
  { id:'u3', title:{ky:'Кыргызстан тарыхы',ru:'История Кыргызстана'}, author:'Т.К.Чоротегин', price:560, category:'study', cover:'#3c5a3e', image:'images/история.jpg', pages:320, format:'hard' },
  { id:'u4', title:{ky:'География КР. 8 класс',ru:'География КР. 8 класс'}, author:'А.О.Осмонов', price:450, category:'study', cover:'#4a6b3a', image:'https://new.bizdin.kg/media/book_img/Geografiia-8-kl_LJobV79.webp', pages:240, format:'soft' },
  { id:'u5', title:{ky:'English for Schools',ru:'English for Schools'}, author:'Oxford Press', price:690, category:'study', cover:'#5a3a6b', image:'https://content.etilize.com/500/1065520819.jpg', badge:{ky:'Жаңы',ru:'Новинка'}, pages:200, format:'hard' },
  { id:'u6', title:{ky:'Физика. 9 класс',ru:'Физика. 9 класс'}, author:'Э.Мамбетакунов', price:480, category:'study', cover:'#6b3a5a', image:'https://www.biblioteka.kg/uploads/978-9967-34-681-2.jpg', pages:256, format:'hard' },
  { id:'u7', title:{ky:'Химия. 8-класс',ru:'Химия. 8 класс'}, author:'С.Б.Исмаилова', price:460, category:'study', cover:'#2c3e50', image:'images/химия.jpg', pages:190, format:'soft' },
  { id:'u8', title:{ky:'Адабият. 11-класс',ru:'Литература. 11 класс'}, author:'Т.И.Ботбаева', price:580, category:'study', cover:'#34495e', image:'images/адабият.webp', pages:340, format:'hard' },
  { id:'u9', title:{ky:'Информатика. 7-9 класс',ru:'Информатика. 7-9 класс'}, author:'Сорос - Кыргызстан', price:490, category:'study', cover:'#16a085', image:'images/информатика.jpg', pages:210, format:'soft' },
  { id:'u10', title:{ky:'Алиппе',ru:'Алиппе / Букварь'}, author:'С.Рысбаев', price:350, category:'study', cover:'#27ae60', image:'images/алипе.jpg', badge:{ky:'Баштапкы',ru:'Начальная'}, pages:120, format:'hard' },
  { id:'u11', title:{ky:'Биология. 7-класс',ru:'Биология. 7-8 класс'}, author:'А.Токтосунов', price:440, category:'study', cover:'#2e7d32', image:'images/биология.webp', pages:180, format:'soft' },
  { id:'u12', title:{ky:'Дүйнө тарыхы. 10-класс',ru:'Всемирная история. 10 класс'}, author:'О.Ж.Осмонов', price:530, category:'study', cover:'#37474f', image:'images/мир история.webp', pages:290, format:'hard' },
  { id:'u13', title:{ky:'Адам жана коом. 9-класс',ru:'Человек и общество. 9 класс'}, author:'О.Дж.Осмонов', price:410, category:'study', cover:'#455a64', image:'images/чио.jpg', pages:160, format:'soft' },
  { id:'u14', title:{ky:'Геометрия. 8-класс',ru:'Геометрия. 8 класс'}, author:'И.Бекбоев', price:450, category:'study', cover:'#1565c0', image:'images/геометрия.jpg', pages:200, format:'hard' },
  { id:'u15', title:{ky:'Музыка',ru:'Музыка'}, author:'А.М.Муратова', price:470, category:'study', cover:'#00695c', image:'images/музыка.jpg', pages:175, format:'soft' },
  { id:'h1', title:{ky:'Манас. Чоң эпос',ru:'Манас. Великий эпос'}, author:'С.Каралаев', price:1200, category:'fiction', cover:'#962a1f', image:'images/manas.jpg', badge:{ky:'Хит',ru:'Хит'}, pages:450, format:'hard' },
  { id:'h2', title:{ky:'Жамийла',ru:'Джамиля'}, author:'Ч.Айтматов', price:520, category:'fiction', cover:'#c0392b', image:'images/жамиля.jpg', pages:120, format:'soft' },
  { id:'h3', title:{ky:'Гүлсарат',ru:'Прощай, Гульсары!'}, author:'Ч.Айтматов', price:540, category:'fiction', cover:'#a83b2e', image:'https://bookhouse.kg/media/galleryphoto/2022/9/e64df607-371f-4c3a-b780-d729d71f4ff5.jpg.600x780_q94.jpg', pages:180, format:'hard' },
  { id:'h4', title:{ky:'Кылым карытар бир күн',ru:'И дольше века длится день'}, author:'Ч.Айтматов', price:680, category:'fiction', cover:'#7a2c20', image:'images/Снимок экрана 2026-05-25 204641.png', pages:350, format:'hard' },
  { id:'h5', title:{ky:'Сынган кылыч',ru:'Сломанный меч'}, author:'Т.Касымбеков', price:720, category:'fiction', cover:'#5a2018', image:'https://bookhouse.kg/media/galleryphoto/2022/4/bda94cd3-748d-4e3e-b90d-058e6a9c9955.jpeg.600x780_q94.jpg', pages:400, format:'hard' },
  { id:'h6', title:{ky:'Ажар',ru:'Ажар'}, author:'К.Баялинов', price:460, category:'fiction', cover:'#3d1812', image:'https://upload.wikimedia.org/wikipedia/commons/7/70/Ajar_%28book_cover%29.jpg', pages:160, format:'soft' },
  { id:'h7', title:{ky:'Ак кеме',ru:'Белый пароход'}, author:'Ч.Айтматов', price:480, category:'fiction', cover:'#8e44ad', image:'images/ак кеме.jpg', badge:{ky:'Хит',ru:'Хит'}, pages:140, format:'hard' },
  { id:'h8', title:{ky:'Эрте келген турналар',ru:'Ранние журавли'}, author:'Ч.Айтматов', price:390, category:'fiction', cover:'#2980b9', image:'images/ранние журавли.webp', pages:110, format:'soft' },
  { id:'h9', title:{ky:'Кандуу жылдар',ru:'Кровавые годы'}, author:'А.Токомбаев', price:750, category:'fiction', cover:'#27ae60', image:'images/кандуу жылдар.jpg', pages:420, format:'hard' },
  { id:'h10', title:{ky:'Тоолор кулаганда',ru:'Когда падают горы'}, author:'Ч.Айтматов', price:650, category:'fiction', cover:'#d35400', image:'images/тоолор кулаганда.jpg', pages:290, format:'hard' },
  { id:'h11', title:{ky:'Бетме-бет',ru:'Лицом к лицу'}, author:'Ч.Айтматов', price:420, category:'fiction', cover:'#7f8c8d', image:'images/бетме бет.png', pages:130, format:'soft' },
  { id:'h12', title:{ky:'Кел-кел',ru:'Кел-кел'}, author:'Т.Касымбеков', price:690, category:'fiction', cover:'#4e342e', image:'images/келкел.jpg', pages:380, format:'hard' },
  { id:'h13', title:{ky:'Кызыл алма',ru:'Красное яблоко'}, author:'Ч.Айтматов', price:490, category:'fiction', cover:'#ef6c00', image:'images/кызыл алма.png', pages:210, format:'soft' },
  { id:'h14', title:{ky:'Каныбек',ru:'Каныбек'}, author:'К.Жантөшев', price:710, category:'fiction', cover:'#b71c1c', image:'images/каныбек.jpg', badge:{ky:'Классика',ru:'Классика'}, pages:460, format:'hard' },
  { id:'h15', title:{ky:'Деңиз бойлой жээктеген ала дөбөт',ru:'Пегий пес, бегущий краем моря'}, author:'Ч.Айтматов', price:510, category:'fiction', cover:'#1565c0', image:'images/пег.пес.jpg', pages:150, format:'soft' },
  { id:'k1', title:{ky:'Кыргыз эл жомоктору',ru:'Кыргызские народные сказки'}, author:'Эл оозунан', price:380, category:'kids', cover:'#d4a437', image:'https://lh5.googleusercontent.com/proxy/bboKrewUu4hiqMLNQpJveKB25PeY2E0jqUeS5lFfzi6YwK8UYv12bnzS9_9i6_rFEHJLR0jfKZ4AJZ-LvyxzaPG-V9HuKt64oGRVaQnwBLEl52wpc6iM7oY', badge:{ky:'Балдарга',ru:'Детям'}, pages:96, format:'hard' },
  { id:'k2', title:{ky:'Алтын балык',ru:'Сказка о золотой рыбке'}, author:'А.Пушкин', price:290, category:'kids', cover:'#c89630', image:'https://nukadeti.ru/content/images/essence/tale/1909/32.jpg', pages:64, format:'soft' },
  { id:'k3', title:{ky:'Колобок жана достору',ru:'Колобок и его друзья'}, author:'Иллюстр. изд.', price:340, category:'kids', cover:'#b87f25', image:'https://freelance.ru/download/3368354/pic3958992.jpg', pages:72, format:'hard' },
  { id:'k4', title:{ky:'Эртең мектепке!',ru:'Завтра в школу!'}, author:'Н.Байтемиров', price:310, category:'kids', cover:'#a06820', image:'https://cdn.litres.ru/pub/c/cover_h400/55535030.jpg', pages:48, format:'soft' },
  { id:'k5', title:{ky:'Балдар үчүн унаалар жөнүндө ыр саптары',ru:'Стихи про машины малышам'}, author:'О.Т.Корнеева', price:350, category:'kids', cover:'#f1c40f', image:'images/стихи.webp', pages:80, format:'hard' },
  { id:'k6', title:{ky:'Түлкү менен турна',ru:'Лиса и журавль'}, author:'Балдар жомогу', price:240, category:'kids', cover:'#e67e22', image:'images/лиса и журавль.jpg', pages:32, format:'soft' },
  { id:'k7', title:{ky:'Кичинекей Ханзада',ru:'Маленький принц'}, author:'Антуан де Сент-Экзюпери', price:450, category:'kids', cover:'#3498db', image:'images/маленнький принц.jpg', badge:{ky:'Жаңы',ru:'Новинка'}, pages:128, format:'hard' },
  { id:'k8', title:{ky:'Алиса кереметтер өлкөсүндө',ru:'Алиса в стране чудес'}, author:'Л.Кэрролл', price:280, category:'kids', cover:'#9c27b0', image:'images/алиса.jpeg', pages:56, format:'soft' },
  { id:'k9', title:{ky:'Чоң атанын жомоктору',ru:'Сказки дедушки'}, author:'Элдик чыгарма', price:320, category:'kids', cover:'#ff5722', image:'images/сказки дедушки.jpg', pages:64, format:'hard' },
  { id:'k10', title:{ky:'Чамгыр',ru:'Репка'}, author:'А.Афанасьев', price:210, category:'kids', cover:'#4caf50', image:'images/репка.webp', pages:24, format:'soft' },
  { id:'k11', title:{ky:'Том Сойердин укмуштуу окуялары',ru:'Приключения Тома Сойера'}, author:'Марк Твен', price:490, category:'kids', cover:'#00bcd4', image:'images/том сойер.jpg', pages:220, format:'hard' },
  { id:'k12', title:{ky:'Маугли',ru:'Маугли'}, author:'Редьярд Киплинг', price:460, category:'kids', cover:'#8bc34a', image:'images/маугли.jpg', pages:180, format:'hard' },
  { id:'k13', title:{ky:'Аля, Кляксич жана А тамгасы',ru:'Аля, кляксич и буква А'}, author:'И.Токмакова', price:260, category:'kids', cover:'#e91e63', image:'images/аля а.webp', pages:40, format:'soft' },
  { id:'k14', title:{ky:'Бремендик музыканттар',ru:'Бременские музыканты'}, author:'Братья Гримм', price:330, category:'kids', cover:'#ffeb3b', image:'images/беремнские музыканты.jpg', pages:48, format:'hard' },
  { id:'k15', title:{ky:'Буратинонун жоруктары',ru:'Приключения Буратино'}, author:'А.Толстой', price:420, category:'kids', cover:'#ff9800', image:'images/буратино.jpg', badge:{ky:'Хит',ru:'Хит'}, pages:136, format:'hard' }
];
/*Отзыв*/
const REVIEWS_KEY = 'biypara_reviews_v1';

function getReviews(bookId) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  return all[bookId] || [];
}

function addReview(bookId, userName, rating, text) {
  const all = JSON.parse(localStorage.getItem(REVIEWS_KEY) || '{}');
  if (!all[bookId]) all[bookId] = [];
  all[bookId].unshift({
    id: Date.now(),
    userName,
    rating,
    text,
    date: new Date().toISOString()
  });
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

function getAverageRating(bookId) {
  const reviews = getReviews(bookId);
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return sum / reviews.length;
}


/*для валидации шаарлар*/
const KYRGYZ_CITIES = [
  'бишкек', 'ош', 'жалал-абад', 'каракол', 'талас', 'нарын', 'баткен',
  'кызыл-кыя', 'токмок', 'кант', 'кара-балта', 'балыкчы', 'чолпон-ата',
  'кемин', 'орловка', 'шамалды-сай', 'кочкор-ата', 'майлуу-суу', 'таш-комур',
  'кок-жангак', 'сулюкта', 'раззаков', 'кадамжай', 'кызыл-кия', 'ноокат',
  'өзгөн', 'кара-суу', 'узген', 'ачы', 'базар-коргон', 'кербен', 'аим',
  'кара-кулжа', 'чуй', 'шопоков', 'беловодское', 'лебединовка'
];

function validateCity(city) {
  if (!city || city.trim() === '') {
    return { valid: false, message: getLang() === 'ky' ? 'Шаарды жазыңыз' : 'Введите город' };
  }
  const cityLower = city.trim().toLowerCase();
  const isValid = KYRGYZ_CITIES.some(c => c === cityLower || cityLower.includes(c) || c.includes(cityLower));
  if (!isValid) {
    return { 
      valid: false, 
      message: getLang() === 'ky' 
        ? `"${city}" туура эмес. Кыргызстандын шаарларын жазыңыз (Бишкек, Ош, Жалал-Абад ж.б.)`
        : `"${city}" не найден. Введите город Кыргызстана (Бишкек, Ош, Джалал-Абад и др.)`
    };
  }
  return { valid: true, message: '' };
}

function validateEmail(email) {
  const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
  if (!email || email.trim() === '') {
    return { valid: false, message: getLang() === 'ky' ? 'E-mail жазыңыз' : 'Введите email' };
  }
  if (!re.test(email)) {
    return { valid: false, message: getLang() === 'ky' ? 'Туура эмес e-mail' : 'Неверный email' };
  }
  return { valid: true, message: '' };
}

function validateName(name) {
  if (!name || name.trim() === '') {
    return { valid: false, message: getLang() === 'ky' ? 'Аты-жөнүңүздү жазыңыз' : 'Введите имя и фамилию' };
  }
  if (name.trim().length < 2) {
    return { valid: false, message: getLang() === 'ky' ? 'Атыңыз кыска' : 'Имя слишком короткое' };
  }
  return { valid: true, message: '' };
}

/*i18n*/
const I18N = {
  ky:{
    nav_catalog:'Каталог', nav_about:'Биз жөнүндө', nav_contacts:'Байланыш', nav_cart:'Себет', nav_account:'Кабинет',
    login:'Кирүү', logout:'Чыгуу', register:'Катталуу',
    theme:'Түс', language:'Тил',
    hero_title_a:'Билим жана', hero_title_em:'кыял', hero_title_b:'— бир китепте.',
    hero_text:'Кыргызстандын баардык аймагына окуу китептерин, көркөм адабиятты жана балдар адабиятын жеткирүү.',
    hero_btn_catalog:'Каталогго өтүү', hero_btn_about:'Биз жөнүндө',
    slider_label:'Сунушталган', slider_buy:'Себетке кошуу',
    catalog_title:'Каталог', catalog_sub:'Тандалган басылмалар — мектептерге, студенттерге жана китеп сүйүүчүлөргө.',
    f_all:'Баары', f_study:'Окуу', f_fiction:'Көркөм', f_kids:'Балдарга',
    add_btn:'Себетке',
    cart_title:'Сиздин себет', cart_sub:'Заказыңызды текшерип, жөнөтүңүз.',
    cart_empty_t:'Себетиңиз бош', cart_empty_p:'Каталогдон сүйүктүү китебиңизди табыңыз.', cart_empty_btn:'Каталогго өтүү',
    sum_title:'Заказ', sum_books:'Китептер', sum_delivery:'Жеткирүү (Бишкек)', sum_total:'Жалпы',
    sum_free:'Бекер', sum_hint:'1500 сомдон жогорку заказ — жеткирүү бекер',
    checkout:'Заказ берүү',
    toast_added:'Китеп себетке кошулду', toast_order:'Рахмат! Заказ кабыл алынды.', toast_login_first:'Заказ берүү үчүн кириңиз',
    toast_login_ok:'Кош келиңиз!', toast_register_ok:'Каттоо ийгиликтүү!', toast_logout:'Чыктыңыз', toast_msg_sent:'Билдирүү жөнөтүлдү!',
    toast_invalid:'Логин же сырсөз туура эмес', toast_exists:'Бул e-mail катталган',
    about_title_a:'Биз — китеп', about_title_em:'аркылуу', about_title_b:'билим тарата турган дүкөнбүз.',
    about_p:'Букля 2021-жылы Бишкекте ачылган. Биздин максат — Кыргызстандын ар бир аймагына сапаттуу окуу китептерин жеткирүү.',
    about_orders:'Аткарылган заказ', about_cities:'Кыргызстан боюнча облус',
    values_title:'Биздин баалуулуктар', values_sub:'Биз кантип иштейбиз.',
    v1_t:'Тыкан тандоо', v1_p:'Ар бир китеп басмадан түз келет.',
    v2_t:'Тез жеткирүү', v2_p:'Бишкек боюнча 1 күндө, регионго 2–4 күндө.',
    v3_t:'Ишенимдүү колдоо', v3_p:'Мектептер жана окурмандар үчүн жекелештирилген сунуштар.',
    contacts_title:'Байланыш', contacts_sub:'Суроолоруңуз барбы? Биз жардам беребиз.',
    c_coords:'Координаттар', c_addr:'Дареги', c_phone:'Телефон', c_wa:'WhatsApp', c_email:'E-mail', c_hours:'Иштөө', c_insta:'Instagram',
    c_send:'Билдирүү жөнөтүү', c_name:'Атыңыз', c_msg:'Билдирүүңүз...', c_send_btn:'Жөнөтүү',
    auth_login_t:'Кабинетке кирүү', auth_login_s:'Эсебиңизге кирип, заказдарды көрүңүз.',
    auth_register_t:'Жаңы эсеп ачуу', auth_register_s:'Заказ тарыхын сактап, тездетип сатып алыңыз.',
    f_name:'Аты-жөнү', f_email:'E-mail', f_password:'Сырсөз',
    f_address:'Дарегиңиз', f_city:'Шаар/Район', f_street:'Көчөсү', f_apartment:'Үй/Апартамент', f_address_note:'Толук дарегиңизди жазыңыз (жеткирүү үчүн)',
    no_account:'Эсебиңиз жокпу?', have_account:'Эсебиңиз барбы?',
    account_t:'Менин кабинетим', orders_t:'Заказдарымдын тарыхы', no_orders:'Сизде азырынча заказ жок.',
    order_status:'Иштелип жатат', order_total:'Жалпы',
    search_placeholder:'Китептерден издөө...', search_btn:'Издөө',
    filter_price:'Баасы', filter_format:'Форматы', filter_all_formats:'Бардык форматтар',
    filter_hardcover:'Катуу мукаба', filter_softcover:'Жумшак мукаба',
    price_from:'-дан', price_to:'чейин', filter_apply:'Колдонуу', filter_reset:'Тазалоо',
    sort_by:'Сорттоо', sort_default:'Стандарттуу', sort_price_asc:'Баасы өсүү', sort_price_desc:'Баасы кемүү',
    reviews_title:'Сын-пикирлер', write_review:'Сын-пикир жазуу', review_rating:'Баа', review_text:'Сын-пикириңиз',
    review_submit:'Жөнөтүү', no_reviews:'Азырынча пикирлер жок. Биринчи болуп жазыңыз!', review_name:'Сиздин атыңыз',
    payment_method:'Заказ төлөмү', pay_sub:'Төлөм ыкмасын тандаңыз', pay_card:'Банк картасы', pay_cash:'Накталай', pay_mbank:'MBank',
    pay_btn:'Төлөө', pay_success:'Төлөм ийгиликтүү өттү!',
    ph_card_number:'Картанын номери', ph_card_exp:'AA/ЖЖ', ph_card_cvv:'CVV', ph_card_holder:'Карта ээсинин аты',
    address_info:'Дарек маалыматы', edit_profile:'Профилди түзөтүү', save:'Сактоо', cancel:'Жокко чыгару', address_not_set:'Дарегиңиз коюлган эмес. Профилди түзөтүп кошуңуз.',
    city:'Шаар', street:'Көчө', apartment:'Үй', full_address:'Толук дарек',
    filter_category:'Категория', filter_all_categories:'Бардыгы',
  },
  ru:{
    nav_catalog:'Каталог', nav_about:'О нас', nav_contacts:'Контакты', nav_cart:'Корзина', nav_account:'Кабинет',
    login:'Войти', logout:'Выйти', register:'Регистрация',
    theme:'Тема', language:'Язык',
    hero_title_a:'Знания и', hero_title_em:'мечты', hero_title_b:'— в одной книге.',
    hero_text:'Доставка учебной, художественной и детской литературы по всему Кыргызстану.',
    hero_btn_catalog:'В каталог', hero_btn_about:'О нас',
    slider_label:'Рекомендуем', slider_buy:'В корзину',
    catalog_title:'Каталог', catalog_sub:'Подобранные издания — для школ, студентов и любителей книг.',
    f_all:'Все', f_study:'Учебная', f_fiction:'Художественная', f_kids:'Детская',
    add_btn:'В корзину',
    cart_title:'Ваша корзина', cart_sub:'Проверьте и оформите заказ.',
    cart_empty_t:'Корзина пуста', cart_empty_p:'Найдите любимую книгу в каталоге.', cart_empty_btn:'В каталог',
    sum_title:'Заказ', sum_books:'Книги', sum_delivery:'Доставка (Бишкек)', sum_total:'Итого',
    sum_free:'Бесплатно', sum_hint:'Заказ от 1500 сом — доставка бесплатно',
    checkout:'Оформить заказ',
    toast_added:'Книга добавлена в корзину', toast_order:'Спасибо! Заказ принят.', toast_login_first:'Войдите, чтобы оформить заказ',
    toast_login_ok:'С возвращением!', toast_register_ok:'Регистрация прошла успешно!', toast_logout:'Вы вышли', toast_msg_sent:'Сообщение отправлено!',
    toast_invalid:'Неверный e-mail или пароль', toast_exists:'Этот e-mail уже зарегистрирован',
    about_title_a:'Мы — магазин, который', about_title_em:'через книги', about_title_b:'делится знаниями.',
    about_p:'Букля открылся в Бишкеке в 2021 году. Наша цель — доставить качественные книги в каждый уголок Кыргызстана.',
    about_orders:'Выполнено заказов', about_cities:'Областей в Кыргызстане',
    values_title:'Наши ценности', values_sub:'Как мы работаем.',
    v1_t:'Тщательный отбор', v1_p:'Каждая книга — напрямую от издательства.',
    v2_t:'Быстрая доставка', v2_p:'По Бишкеку за 1 день, в регионы — 2–4 дня.',
    v3_t:'Надёжная поддержка', v3_p:'Индивидуальные предложения для школ и читателей.',
    contacts_title:'Контакты', contacts_sub:'Есть вопросы? Мы всегда поможем.',
    c_coords:'Наши координаты', c_addr:'Адрес', c_phone:'Телефон', c_wa:'WhatsApp', c_email:'E-mail', c_hours:'Часы работы', c_insta:'Instagram',
    c_send:'Отправить сообщение', c_name:'Ваше имя', c_msg:'Ваше сообщение...', c_send_btn:'Отправить',
    auth_login_t:'Вход в кабинет', auth_login_s:'Войдите, чтобы видеть свои заказы.',
    auth_register_t:'Создать аккаунт', auth_register_s:'Храните историю заказов и покупайте быстрее.',
    f_name:'Имя и фамилия', f_email:'E-mail', f_password:'Пароль',
    f_address:'Ваш адрес', f_city:'Город/Район', f_street:'Улица', f_apartment:'Дом/Квартира', f_address_note:'Укажите полный адрес для доставки',
    no_account:'Нет аккаунта?', have_account:'Уже есть аккаунт?',
    account_t:'Мой кабинет', orders_t:'История моих заказов', no_orders:'У вас пока нет заказов.',
    order_status:'В обработке', order_total:'Итого',
    search_placeholder:'Поиск книг...', search_btn:'Поиск',
    filter_price:'Цена', filter_format:'Формат', filter_all_formats:'Все форматы',
    filter_hardcover:'Твёрдый', filter_softcover:'Мягкий',
    price_from:'от', price_to:'до', filter_apply:'Применить', filter_reset:'Сбросить',
    sort_by:'Сортировка', sort_default:'По умолчанию', sort_price_asc:'Цена ↑', sort_price_desc:'Цена ↓',
    reviews_title:'Отзывы', write_review:'Написать отзыв', review_rating:'Оценка', review_text:'Ваш отзыв',
    review_submit:'Отправить', no_reviews:'Пока нет отзывов. Будьте первым!', review_name:'Ваше имя',
    payment_method:'Оплата заказа', pay_sub:'Выберите способ оплаты', pay_card:'Банковская карта', pay_cash:'Наличными', pay_mbank:'MBank',
    pay_btn:'Оплатить', pay_success:'Оплата прошла успешно!',
    ph_card_number:'Номер карты', ph_card_exp:'ММ/ГГ', ph_card_cvv:'CVV', ph_card_holder:'Имя владельца',
    address_info:'Адресная информация', edit_profile:'Редактировать профиль', save:'Сохранить', cancel:'Отмена', address_not_set:'Ваш адрес не указан. Добавьте его в настройках профиля.',
    city:'Город', street:'Улица', apartment:'Дом', full_address:'Полный адрес',
    filter_category:'Категория', filter_all_categories:'Все категории',
  }
};

const LANG_KEY='biypara_lang', THEME_KEY='biypara_theme';
const getLang = () => localStorage.getItem(LANG_KEY) || 'ky';
const setLang = l => { localStorage.setItem(LANG_KEY, l); location.reload(); };
const t = k => I18N[getLang()][k] || k;
const localized = v => typeof v === 'string' ? v : (v?.[getLang()] || v?.ky || '');

/*темнач и светлая*/
const getTheme = () => localStorage.getItem(THEME_KEY) || 'light';
function applyTheme(){
  document.documentElement.setAttribute('data-theme', getTheme());
}
function toggleTheme(){
  const next = getTheme()==='dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme();
  const btn = document.querySelector('.theme-btn');
  if(btn) btn.innerHTML = next==='dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}
applyTheme();

/*авториазция*/
const USERS_KEY='biypara_users_v1', SESSION_KEY='biypara_session_v1';
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)||'{}');
const saveUsers = u => localStorage.setItem(USERS_KEY, JSON.stringify(u));
const currentUser = () => {
  const e = localStorage.getItem(SESSION_KEY);
  if(!e) return null;
  const user = getUsers()[e] || null;
  if (user && !user.address) user.address = { city: '', street: '', apartment: '' };
  return user;
};

function register(name, email, password, lang, address = { city: '', street: '', apartment: '' }){
  email = email.toLowerCase().trim();
  const users = getUsers();
  if(users[email]) return { ok:false, error:'exists' };
  users[email] = { name, email, password, lang: lang || getLang(), orders:[], reviews:[], address, photo: null };
  saveUsers(users);
  localStorage.setItem(SESSION_KEY, email);
  return { ok:true };
}

function registerWithAddress(name, email, password, lang, address) {
  /*валидация*/
  const nameValid = validateName(name);
  if (!nameValid.valid) {
    return { ok: false, error: 'name', message: nameValid.message };
  }
  
  const emailValid = validateEmail(email);
  if (!emailValid.valid) {
    return { ok: false, error: 'email', message: emailValid.message };
  }
  
  if (!password || password.length < 4) {
    return { ok: false, error: 'password', message: getLang() === 'ky' ? 'Сырсөз кеминде 4 белгиден турушу керек' : 'Пароль должен быть не менее 4 символов' };
  }
  
  const cityValid = validateCity(address.city);
  if (!cityValid.valid) {
    return { ok: false, error: 'city', message: cityValid.message };
  }
  
  email = email.toLowerCase().trim();
  const users = getUsers();
  if (users[email]) {
    return { ok: false, error: 'exists', message: getLang() === 'ky' ? 'Бул e-mail катталган' : 'Этот email уже зарегистрирован' };
  }
  
  users[email] = { 
    name, 
    email, 
    password, 
    lang: lang || getLang(), 
    orders: [], 
    reviews: [], 
    address,
    photo: null 
  };
  saveUsers(users);
  localStorage.setItem(SESSION_KEY, email);
  return { ok: true };
}

function updateUserAddress(email, address) {
  email = email.toLowerCase().trim();
  const users = getUsers();
  if (users[email]) {
    users[email].address = address;
    saveUsers(users);
    return true;
  }
  return false;
}

function updateUserProfile(email, updates) {
  email = email.toLowerCase().trim();
  const users = getUsers();
  if (users[email]) {
    Object.assign(users[email], updates);
    saveUsers(users);
    
    if (updates.email && updates.email !== email) {
      const newEmail = updates.email.toLowerCase().trim();
      users[newEmail] = users[email];
      delete users[email];
      saveUsers(users);
      localStorage.setItem(SESSION_KEY, newEmail);
    }
    return true;
  }
  return false;
}

function saveProfilePhoto(email, base64Image) {
  email = email.toLowerCase().trim();
  const users = getUsers();
  if (users[email]) {
    users[email].photo = base64Image;
    saveUsers(users);
    return true;
  }
  return false;
}

function login(email, password){
  email = email.toLowerCase().trim();
  const u = getUsers()[email];
  if(!u || u.password !== password) return { ok:false };
  localStorage.setItem(SESSION_KEY, email);
  return { ok:true };
}

function logout(){
  localStorage.removeItem(SESSION_KEY);
  toast(t('toast_logout'));
  setTimeout(()=>location.href='index.html', 600);
}

/*козина*/
const CART_KEY='biypara_cart_v1';
const getCart = () => JSON.parse(localStorage.getItem(CART_KEY)||'{}');
const saveCart = c => { localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartBadge(); };
const cartCount = () => Object.values(getCart()).reduce((s,q)=>s+q,0);
const cartTotal = () => Object.entries(getCart()).reduce((s,[id,q])=>{
  const b = BOOKS.find(x=>x.id===id); return s + (b ? b.price*q : 0);
},0);
function updateCartBadge(){
  document.querySelectorAll('.cart-count').forEach(el=>{
    const n=cartCount(); el.textContent=n; el.classList.toggle('hidden', n===0);
  });
}
function addToCart(id){
  const c=getCart(); c[id]=(c[id]||0)+1; saveCart(c); toast(t('toast_added'));
  renderBookModal(id);
}
function changeQty(id,d){
  const c=getCart(); c[id]=(c[id]||0)+d; if(c[id]<=0) delete c[id];
  saveCart(c); renderCart();
}
function removeItem(id){ const c=getCart(); delete c[id]; saveCart(c); renderCart(); }

/*уведомление всплывающее*/
function toast(msg){
  let el=document.querySelector('.toast');
  if(!el){ el=document.createElement('div'); el.className='toast'; document.body.appendChild(el); }
  el.textContent=msg; el.classList.add('show');
  clearTimeout(el._tm); el._tm=setTimeout(()=>el.classList.remove('show'),2200);
}

/*цена формат*/
const fmt = n => new Intl.NumberFormat('ru-RU').format(n) + ' сом';
const shade = (hex,p) => {
  const n=parseInt(hex.slice(1),16);
  let r=(n>>16)+p, g=((n>>8)&0xff)+p, b=(n&0xff)+p;
  r=Math.max(0,Math.min(255,r)); g=Math.max(0,Math.min(255,g)); b=Math.max(0,Math.min(255,b));
  return '#'+((r<<16)|(g<<8)|b).toString(16).padStart(6,'0');
};
function coverStyle(b){
  if(b.image && b.image.trim()) {
    return `background-image: url('${b.image}'), linear-gradient(135deg, ${b.cover}, ${shade(b.cover,-20)})`;
  }
  return `background: linear-gradient(135deg, ${b.cover}, ${shade(b.cover,-20)})`;
}

/*поиск фильтры, сортировка*/
let currentFilter = 'all';
let currentSearch = '';
let currentPriceMin = 0;
let currentPriceMax = Infinity;
let currentFormat = 'all';
let currentSort = 'default';

function applyFiltersAndSort(books) {
  let result = [...books];
  
  if (currentFilter !== 'all') {
    result = result.filter(b => b.category === currentFilter);
  }
  
  if (currentSearch.trim()) {
    const searchLower = currentSearch.toLowerCase();
    result = result.filter(b => 
      localized(b.title).toLowerCase().includes(searchLower) ||
      b.author.toLowerCase().includes(searchLower)
    );
  }
  
  result = result.filter(b => b.price >= currentPriceMin && b.price <= currentPriceMax);
  
  if (currentFormat !== 'all') {
    result = result.filter(b => b.format === currentFormat);
  }
  
  if (currentSort === 'price_asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price_desc') {
    result.sort((a, b) => b.price - a.price);
  }
  
  return result;
}

function renderCatalog(filter='all'){
  const grid = document.getElementById('catalog-grid');
  if(!grid) return;
  
  currentFilter = filter;
  const filtered = applyFiltersAndSort(BOOKS);
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1"><h3>${getLang() === 'ky' ? 'Китеп табылган жок' : 'Книги не найдены'}</h3></div>`;
    return;
  }
  
  grid.innerHTML = filtered.map(b=>{
    const title = localized(b.title);
    const badge = b.badge ? `<span class="badge">${localized(b.badge)}</span>` : '';
    const avgRating = getAverageRating(b.id);
    const ratingStars = '★'.repeat(Math.round(avgRating)) + '☆'.repeat(5 - Math.round(avgRating));
    return `
    <article class="card" onclick="showBookModal('${b.id}')">
      <div class="card-cover ${b.image?'has-image':''}" style="${coverStyle(b)}">
        ${badge}
        <div class="ct">${title}</div>
      </div>
      <div class="card-body">
        <span class="author">${b.author}</span>
        <h3 class="title">${title}</h3>
        <div class="rating">${ratingStars} <span style="font-size:12px">(${getReviews(b.id).length})</span></div>
        <div class="card-foot">
          <span class="price">${fmt(b.price)}</span>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart('${b.id}')">${t('add_btn')}</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

/*фильтр сбоку лупа*/
let isSidebarOpen = true;

function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
  const sidebar = document.querySelector('.filter-sidebar');
  const toggleBtn = document.querySelector('.filter-toggle');
  if (sidebar) {
    if (isSidebarOpen) {
      sidebar.classList.remove('closed');
      toggleBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
    } else {
      sidebar.classList.add('closed');
      toggleBtn.innerHTML = '<i class="fa-solid fa-list"></i>';
    }
  }
}

function renderFilterSidebar() {
  const catalogSection = document.getElementById('catalog');
  if (!catalogSection) return;
  
  const existingSidebar = document.querySelector('.filter-sidebar');
  const existingToggle = document.querySelector('.filter-toggle');
  if (existingSidebar) existingSidebar.remove();
  if (existingToggle) existingToggle.remove();
  
  const originalFilters = document.querySelector('.filters');
  if (originalFilters) {
    originalFilters.style.display = 'none';
  }
  
  const catalogLayout = document.createElement('div');
  catalogLayout.className = 'catalog-layout';
  
  const sidebarHtml = `
    <aside class="filter-sidebar">
      <h3>${t('filter_price')}</h3>
      <div class="filter-group">
        <div class="price-range">
          <input type="number" id="price-min" placeholder="${t('price_from')}" value="${currentPriceMin || ''}" step="100">
          <span>-</span>
          <input type="number" id="price-max" placeholder="${t('price_to')}" value="${currentPriceMax === Infinity ? '' : currentPriceMax}" step="100">
        </div>
      </div>
      
      <h3>${t('filter_category')}</h3>
      <div class="filter-group">
        <select id="category-select">
          <option value="all" ${currentFilter === 'all' ? 'selected' : ''}>${t('filter_all_categories')}</option>
          <option value="study" ${currentFilter === 'study' ? 'selected' : ''}>${t('f_study')}</option>
          <option value="fiction" ${currentFilter === 'fiction' ? 'selected' : ''}>${t('f_fiction')}</option>
          <option value="kids" ${currentFilter === 'kids' ? 'selected' : ''}>${t('f_kids')}</option>
        </select>
      </div>

      <h3>${t('filter_format')}</h3>
      <div class="filter-group">
        <select id="format-select">
          <option value="all" ${currentFormat === 'all' ? 'selected' : ''}>${t('filter_all_formats')}</option>
          <option value="hard" ${currentFormat === 'hard' ? 'selected' : ''}>${t('filter_hardcover')}</option>
          <option value="soft" ${currentFormat === 'soft' ? 'selected' : ''}>${t('filter_softcover')}</option>
        </select>
      </div>
      
      <h3>${t('sort_by')}</h3>
      <div class="filter-group">
        <select id="sort-select">
          <option value="default" ${currentSort === 'default' ? 'selected' : ''}>${t('sort_default')}</option>
          <option value="price_asc" ${currentSort === 'price_asc' ? 'selected' : ''}>${t('sort_price_asc')}</option>
          <option value="price_desc" ${currentSort === 'price_desc' ? 'selected' : ''}>${t('sort_price_desc')}</option>
        </select>
      </div>
      
      <div class="filter-actions">
        <button id="filter-apply" class="btn btn-primary">${t('filter_apply')}</button>
        <button id="filter-reset" class="btn btn-ghost">${t('filter_reset')}</button>
      </div>
    </aside>
  `;
  
  const toggleBtnHtml = `<button class="filter-toggle" onclick="toggleSidebar()"><i class="fa-solid fa-magnifying-glass"></i></button>`;
  
  const catalogMain = document.createElement('div');
  catalogMain.className = 'catalog-main';
  
  const sectionHead = catalogSection.querySelector('.section-head');
  
  catalogLayout.innerHTML = sidebarHtml;
  
  if (sectionHead) {
    sectionHead.insertAdjacentElement('afterend', catalogLayout);
  } else {
    catalogSection.insertAdjacentElement('afterbegin', catalogLayout);
  }
  
  const grid = document.getElementById('catalog-grid');
  if (grid && grid.parentNode) {
    catalogMain.appendChild(grid);
    catalogLayout.appendChild(catalogMain);
  }
  
  document.body.insertAdjacentHTML('beforeend', toggleBtnHtml);
  
  document.getElementById('filter-apply').addEventListener('click', () => {
    currentPriceMin = parseInt(document.getElementById('price-min').value) || 0;
    currentPriceMax = parseInt(document.getElementById('price-max').value) || Infinity;
    currentFormat = document.getElementById('format-select').value;
    currentSort = document.getElementById('sort-select').value;
    const cat = document.getElementById('category-select').value;
    currentFilter = cat;
    document.querySelectorAll('.filters .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.filter === cat);
    });
    renderCatalog(cat);
  });
  
  document.getElementById('filter-reset').addEventListener('click', () => {
    currentPriceMin = 0;
    currentPriceMax = Infinity;
    currentFormat = 'all';
    currentSort = 'default';
    currentFilter = 'all';
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    document.getElementById('format-select').value = 'all';
    document.getElementById('sort-select').value = 'default';
    document.getElementById('category-select').value = 'all';
    document.querySelectorAll('.filters .chip').forEach(c => {
      c.classList.toggle('active', c.dataset.filter === 'all');
    });
    renderCatalog('all');
  });
}

/*поиск загаловок*/
function addHeaderSearch() {
  const headerActions = document.querySelector('.header-actions');
  if (!headerActions) return;
  
  const searchHtml = `
    <div class="header-search">
      <input type="text" id="header-search-input" placeholder="${t('search_placeholder')}">
      <button id="header-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  `;
  
  const langSwitch = headerActions.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.insertAdjacentHTML('afterend', searchHtml);
  } else {
    headerActions.insertAdjacentHTML('afterbegin', searchHtml);
  }
  
  const searchInput = document.getElementById('header-search-input');
  const searchBtn = document.getElementById('header-search-btn');
  
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        currentSearch = searchInput.value;
        renderCatalog(currentFilter);
        const catalogSection = document.getElementById('catalog');
        if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      currentSearch = searchInput ? searchInput.value : '';
      renderCatalog(currentFilter);
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) catalogSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/*модалка с подробной инфой и отзывами*/
function showBookModal(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;
  
  const reviews = getReviews(bookId);
  const avgRating = getAverageRating(bookId);
  const user = currentUser();
  
  const modalHtml = `
    <div id="book-modal" class="modal-overlay" onclick="if(event.target===this) closeBookModal()">
      <div class="modal-content">
        <button class="modal-close" onclick="closeBookModal()">&times;</button>
        <div class="modal-grid">
          <div class="modal-cover" style="${coverStyle(book)}">
            <div class="modal-cover-title">${localized(book.title)}</div>
          </div>
          <div class="modal-info">
            <h2>${localized(book.title)}</h2>
            <p class="modal-author">${book.author}</p>
            <div class="modal-rating">
              ${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5 - Math.round(avgRating))}
              <span>(${reviews.length} ${getLang() === 'ky' ? 'пикир' : 'отзывов'})</span>
            </div>
            <p class="modal-price">${fmt(book.price)}</p>
            <p class="modal-details"><strong>${getLang() === 'ky' ? 'Формат' : 'Формат'}:</strong> ${book.format === 'hard' ? t('filter_hardcover') : t('filter_softcover')}</p>
            <p class="modal-details"><strong>${getLang() === 'ky' ? 'Барак' : 'Страниц'}:</strong> ${book.pages}</p>
            <button class="btn btn-primary" onclick="addToCart('${book.id}')">${t('add_btn')}</button>
          </div>
        </div>
        
        <div class="reviews-section">
          <h3>${t('reviews_title')}</h3>
          ${user ? `
          <div class="review-form">
            <h4>${t('write_review')}</h4>
            <div class="rating-input">
              <span>${t('review_rating')}:</span>
              <div class="stars" id="review-stars">
                ${[1,2,3,4,5].map(s => `<span class="star" data-rating="${s}">☆</span>`).join('')}
              </div>
            </div>
            <textarea id="review-text" placeholder="${t('review_text')}" rows="3"></textarea>
            <button class="btn btn-primary" onclick="submitReview('${book.id}')">${t('review_submit')}</button>
          </div>
          ` : `<p><a href="auth.html">${t('login')}</a> ${getLang() === 'ky' ? 'пикир калтыруу үчүн' : 'чтобы оставить отзыв'}</p>`}
          
          <div class="reviews-list">
            ${reviews.length === 0 ? `<p>${t('no_reviews')}</p>` : reviews.map(r => `
              <div class="review-item">
                <div class="review-header">
                  <strong>${r.userName}</strong>
                  <span class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
                  <span class="review-date">${new Date(r.date).toLocaleDateString()}</span>
                </div>
                <p class="review-text">${r.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.body.style.overflow = 'hidden';
  
  const stars = document.querySelectorAll('#review-stars .star');
  let selectedRating = 0;
  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.textContent = i < selectedRating ? '★' : '☆';
      });
    });
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.dataset.rating);
      stars.forEach((s, i) => {
        s.textContent = i < val ? '★' : '☆';
      });
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach((s, i) => {
        s.textContent = i < selectedRating ? '★' : '☆';
      });
    });
  });
  
  window.submitReview = function(bookId) {
    const rating = selectedRating;
    const text = document.getElementById('review-text').value.trim();
    if (rating === 0) {
      toast(getLang() === 'ky' ? 'Баа коюңуз' : 'Поставьте оценку');
      return;
    }
    if (!text) {
      toast(getLang() === 'ky' ? 'Пикириңизди жазыңыз' : 'Напишите отзыв');
      return;
    }
    const user = currentUser();
    if (!user) {
      toast(t('toast_login_first'));
      closeBookModal();
      setTimeout(() => location.href = 'auth.html', 900);
      return;
    }
    addReview(bookId, user.name || user.email.split('@')[0], rating, text);
    toast(getLang() === 'ky' ? 'Пикир кошулду!' : 'Отзыв добавлен!');
    closeBookModal();
    setTimeout(() => showBookModal(bookId), 100);
  };
}

function closeBookModal() {
  const modal = document.getElementById('book-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

function renderBookModal(bookId) {
  const existing = document.getElementById('book-modal');
  if (existing) {
    closeBookModal();
    setTimeout(() => showBookModal(bookId), 100);
  }
}

/*слайдер*/
function renderSlider() {
  const sliderContainer = document.getElementById('slider');
  if (!sliderContainer) return;

  const featuredBooks = [
    BOOKS.find(b => b.id === 'h1'),
    BOOKS.find(b => b.id === 'u5'),
    BOOKS.find(b => b.id === 'h2'),
    BOOKS.find(b => b.id === 'k1'),
    BOOKS.find(b => b.id === 'h5'),
  ].filter(Boolean);

  function buildCover(book) {
    const titleText = localized(book.title);
    if (book.image && book.image.trim()) {
      return `<div class="book-3d-cover" style="background-image:url('${book.image}');background-size:cover;background-position:center"></div>`;
    }
    const grad = `linear-gradient(135deg,${book.cover},${shade(book.cover,-25)})`;
    return `
      <div class="book-3d-cover generic" style="background:${grad}">
        <div class="mini-title">${titleText}</div>
        <div class="mini-author">${book.author}</div>
      </div>`;
  }

  function buildSlide(book, idx) {
    const titleText = localized(book.title);
    const badgeText = book.badge ? localized(book.badge) : t('slider_label');
    return `
      <div class="slider-slide${idx === 0 ? ' active' : ''}" data-idx="${idx}">
        <div class="slide-card">
          <div class="slide-info">
            <span class="slide-badge">${badgeText}</span>
            <h2 class="slide-title">${titleText}</h2>
            <div class="slide-author">${book.author}</div>
            <div class="slide-price">${fmt(book.price)}</div>
            <button class="slide-btn" onclick="addToCart('${book.id}')">${t('slider_buy')}</button>
          </div>
          <div class="slide-media">
            <div class="book-3d-wrap">
              ${buildCover(book)}
            </div>
          </div>
        </div>
      </div>`;
  }

  const dotsHtml = featuredBooks.map((_, i) =>
    `<button class="slider-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Слайд ${i+1}"></button>`
  ).join('');

  sliderContainer.innerHTML = `
    <div class="slider-track">
      ${featuredBooks.map(buildSlide).join('')}
    </div>
    <button class="slider-arrow slider-prev" aria-label="Назад">&#8592;</button>
    <button class="slider-arrow slider-next" aria-label="Вперёд">&#8594;</button>
    <div class="slider-dots">${dotsHtml}</div>
  `;

  let current = 0;
  let autoTimer = null;
  const slides = sliderContainer.querySelectorAll('.slider-slide');
  const dots = sliderContainer.querySelectorAll('.slider-dot');

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  const prevBtn = sliderContainer.querySelector('.slider-prev');
  const nextBtn = sliderContainer.querySelector('.slider-next');
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => { goTo(+dot.dataset.dot); startAuto(); });
  });

  let touchStartX = 0;
  sliderContainer.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  sliderContainer.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
}

/*корзина отдельная страничка*/
function renderCart(){
  const wrap = document.getElementById('cart-content'); if(!wrap) return;
  const cart = getCart(); const ids = Object.keys(cart);
  if(ids.length===0){
    wrap.innerHTML = `<div class="empty">
      <h3>${t('cart_empty_t')}</h3>
      <p>${t('cart_empty_p')}</p>
      <a href="index.html" class="btn btn-primary" style="margin-top:18px">${t('cart_empty_btn')}</a>
    </div>`;
    return;
  }
  const items = ids.map(id=>{
    const b = BOOKS.find(x=>x.id===id); if(!b) return '';
    const q = cart[id]; const title = localized(b.title);
    return `<div class="cart-item">
      <div class="cart-cover" style="${coverStyle(b)}">${b.image ? '' : title.slice(0,12)}</div>
      <div class="cart-info">
        <div class="ct-title">${title}</div>
        <div class="ct-author">${b.author}</div>
        <div style="margin-top:8px;font-weight:600">${fmt(b.price)}</div>
      </div>
      <div class="cart-controls">
        <div class="qty">
          <button onclick="changeQty('${id}',-1)">−</button>
          <span>${q}</span>
          <button onclick="changeQty('${id}',1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeItem('${id}')">${getLang()==='ky'?'Алып салуу':'Удалить'}</button>
      </div>
    </div>`;
  }).join('');
  const total = cartTotal();
  const delivery = total>=1500 ? 0 : 150;
  wrap.innerHTML = `
    <div class="cart-layout">
      <div class="cart-list">${items}</div>
      <aside class="summary">
        <h3>${t('sum_title')}</h3>
        <div class="summary-row"><span>${t('sum_books')} (${cartCount()})</span><span>${fmt(total)}</span></div>
        <div class="summary-row"><span>${t('sum_delivery')}</span><span>${delivery===0?t('sum_free'):fmt(delivery)}</span></div>
        <div class="summary-row total"><span>${t('sum_total')}</span><span>${fmt(total+delivery)}</span></div>
        <button class="checkout-btn" onclick="goToCheckout()">${t('checkout')}</button>
        <p style="font-size:12px;color:var(--muted);margin-top:12px;text-align:center">${t('sum_hint')}</p>
      </aside>
    </div>`;
}

/*имитацияоплаты*/
function initPaymentPage() {
  const form = document.getElementById('payment-form');
  if (!form) return;

  const methodBtns = document.querySelectorAll('.pay-method');
  methodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      methodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const method = btn.dataset.method;
      const cardInputs = form.querySelectorAll('.card-only');
      if (method === 'cash') {
        cardInputs.forEach(i => i.style.display = 'none');
      } else {
        cardInputs.forEach(i => i.style.display = '');
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    const cart = getCart();
    if (Object.keys(cart).length === 0) {
      toast(getLang() === 'ky' ? 'Себет бош' : 'Корзина пуста');
      return;
    }

    const user = currentUser();
    if (!user) {
      toast(t('toast_login_first'));
      setTimeout(() => location.href = 'auth.html', 900);
      return;
    }

    const method = document.querySelector('.pay-method.active')?.dataset.method || 'card';
    
    if (method !== 'cash') {
      const cardNumber = form.querySelector('input[placeholder*="Номер"]')?.value;
      const expiry = form.querySelector('input[placeholder*="MM/YY"]')?.value;
      const cvv = form.querySelector('input[placeholder*="CVV"]')?.value;
      
      if (!cardNumber || cardNumber.replace(/\s/g, '').length < 16) {
        toast(getLang() === 'ky' ? 'Картанын номери туура эмес' : 'Неверный номер карты');
        return;
      }
      if (!expiry || !expiry.match(/^\d{2}\/\d{2}$/)) {
        toast(getLang() === 'ky' ? 'Жарактуулук мөөнөтү туура эмес' : 'Неверный срок действия');
        return;
      }
      if (!cvv || cvv.length < 3) {
        toast(getLang() === 'ky' ? 'CVV коду туура эмес' : 'Неверный CVV код');
        return;
      }
    }

    createOrder(method);
  });
}

function createOrder(paymentMethod) {
  const cart = getCart();
  const items = Object.entries(cart).map(([id, q]) => {
    const b = BOOKS.find(x => x.id === id);
    return {
      id,
      title: localized(b.title),
      qty: q,
      price: b.price
    };
  });

  const total = cartTotal();
  const delivery = total >= 1500 ? 0 : 150;
  const grandTotal = total + delivery;

  const order = {
    id: 'BP-' + Date.now().toString(36).toUpperCase(),
    date: new Date().toISOString(),
    payment: {
      method: paymentMethod,
      status: 'paid',
      date: new Date().toISOString()
    },
    items,
    subtotal: total,
    delivery,
    grandTotal
  };

  const users = getUsers();
  const user = currentUser();
  if (users[user.email]) {
    users[user.email].orders = users[user.email].orders || [];
    users[user.email].orders.unshift(order);
    saveUsers(users);
  }

  saveCart({});
  
  toast(t('pay_success'));
  
  setTimeout(() => {
    location.href = 'account.html';
  }, 1500);
}

function goToCheckout() {
  if (cartCount() === 0) {
    toast(getLang() === 'ky' ? 'Себет бош' : 'Корзина пуста');
    return;
  }
  if (!currentUser()) {
    toast(t('toast_login_first'));
    setTimeout(() => location.href = 'auth.html', 900);
    return;
  }
  location.href = 'checkout.html';
}

/*отправка сообщения вопроса*/
function initContactForm(){
  const f = document.getElementById('contact-form'); if(!f) return;
  f.addEventListener('submit', e=>{ e.preventDefault(); toast(t('toast_msg_sent')); f.reset(); });
}

/*аутентификация, проверка адреа*/
function initUnifiedAuth() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabs = document.querySelectorAll('.auth-tab');
  const linkTabs = document.querySelectorAll('.link-tab');
  const panels = document.querySelectorAll('.auth-form-panel');

  function switchTab(tabId) {
    panels.forEach(panel => {
      if (panel.dataset.panel === tabId) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchTab(tab.dataset.tab);
    });
  });

  linkTabs.forEach(link => {
    link.addEventListener('click', () => {
      switchTab(link.dataset.tab);
    });
  });

  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(loginForm);
      const result = login(fd.get('email'), fd.get('password'));
      if (!result.ok) {
        toast(t('toast_invalid'));
        return;
      }
      toast(t('toast_login_ok'));
      const params = new URLSearchParams(location.search);
      const dest = params.get('redirect') === 'cart' ? 'cart.html' : 'account.html';
      setTimeout(() => location.href = dest, 700);
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      
      document.querySelectorAll('.field-error').forEach(el => el.style.display = 'none');
      
      const name = registerForm.querySelector('input[name="name"]')?.value || '';
      const email = registerForm.querySelector('input[name="email"]')?.value || '';
      const password = registerForm.querySelector('input[name="password"]')?.value || '';
      const city = document.getElementById('reg-city')?.value || '';
      const street = document.getElementById('reg-street')?.value || '';
      const apartment = document.getElementById('reg-apartment')?.value || '';
      
      let hasError = false;
      
      const nameValid = validateName(name);
      if (!nameValid.valid) {
        const errorEl = document.getElementById('reg-name-error');
        if (errorEl) {
          errorEl.textContent = nameValid.message;
          errorEl.style.display = 'block';
        }
        hasError = true;
      }
      
      const emailValid = validateEmail(email);
      if (!emailValid.valid) {
        const errorEl = document.getElementById('reg-email-error');
        if (errorEl) {
          errorEl.textContent = emailValid.message;
          errorEl.style.display = 'block';
        }
        hasError = true;
      }
      
      if (!password || password.length < 4) {
        const errorEl = document.getElementById('reg-password-error');
        if (errorEl) {
          errorEl.textContent = getLang() === 'ky' ? 'Сырсөз кеминде 4 белгиден турушу керек' : 'Пароль должен быть не менее 4 символов';
          errorEl.style.display = 'block';
        }
        hasError = true;
      }
      
      const cityValid = validateCity(city);
      if (!cityValid.valid) {
        const errorEl = document.getElementById('reg-city-error');
        if (errorEl) {
          errorEl.textContent = cityValid.message;
          errorEl.style.display = 'block';
        }
        hasError = true;
      }
      
      if (hasError) return;
      
      const result = registerWithAddress(
        name, 
        email, 
        password, 
        getLang(),
        { city, street, apartment }
      );
      
      if (!result.ok) {
        if (result.error === 'exists') {
          const errorEl = document.getElementById('reg-email-error');
          if (errorEl) {
            errorEl.textContent = result.message;
            errorEl.style.display = 'block';
          }
        } else if (result.error === 'city') {
          const errorEl = document.getElementById('reg-city-error');
          if (errorEl) {
            errorEl.textContent = result.message;
            errorEl.style.display = 'block';
          }
        } else {
          toast(result.message || t('toast_exists'));
        }
        return;
      }
      
      toast(t('toast_register_ok'));
      setTimeout(() => location.href = 'account.html', 700);
    });
  }
}

/*профиль с редактированием*/
function renderAccount(){
  const wrap = document.getElementById('account-content'); 
  if(!wrap) return;
  
  const u = currentUser();
  if(!u){ 
    location.href = 'auth.html'; 
    return; 
  }
  
  const hasPhoto = u.photo && u.photo.startsWith('data:image');
  const avatarHtml = hasPhoto 
    ? `<img src="${u.photo}" class="avatar-img" style="width:64px;height:64px;border-radius:50%;object-fit:cover;">`
    : `<div class="avatar">${(u.name || u.email || '?').trim().charAt(0).toUpperCase()}</div>`;
  
  const lang = getLang();
  const address = u.address || { city: '', street: '', apartment: '' };
  const hasAddress = address.city && address.street && address.apartment;
  const fullAddress = hasAddress 
    ? `${address.city}, ${address.street}, ${address.apartment}`
    : `<span style="color: var(--muted);">${t('address_not_set')}</span>`;
  
  let ordersHtml = '';
  
  if (u.orders && u.orders.length > 0) {
    ordersHtml = u.orders.map(o => {
      let orderDate = o.dateFormatted || new Date(o.date).toLocaleString(lang === 'ky' ? 'ky-KG' : 'ru-RU');
      const itemsHtml = o.items.map(item => {
        const itemTotal = (item.price || 0) * (item.qty || 1);
        const itemTotalFormatted = typeof item.priceFormatted === 'string' 
          ? item.priceFormatted 
          : fmt(item.price);
        
        return `
          <div class="order-item">
            <span class="nm">${item.title || item.id} × ${item.qty}</span>
            <span>${itemTotalFormatted}</span>
          </div>
        `;
      }).join('');
      const subtotal = o.subtotalFormatted || fmt(o.subtotal);
      const deliveryText = o.deliveryFormatted || (o.delivery === 0 ? t('sum_free') : fmt(o.delivery));
      const grandTotal = o.grandTotalFormatted || fmt(o.grandTotal);
      const statusText = o.payment?.statusName || t('order_status');
      
      return `
        <div class="order">
          <div class="order-head">
            <div>
              <div class="order-id">№ ${o.id}</div>
              <div class="order-date">${orderDate}</div>
            </div>
            <span class="order-status">${statusText}</span>
          </div>
          <div class="order-items">
            ${itemsHtml}
          </div>
          <div class="order-summary" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--line);">
            <div class="summary-row" style="display: flex; justify-content: space-between; font-size: 14px; color: var(--muted);">
              <span>${t('sum_books')}</span>
              <span>${subtotal}</span>
            </div>
            <div class="summary-row" style="display: flex; justify-content: space-between; font-size: 14px; color: var(--muted);">
              <span>${t('sum_delivery')}</span>
              <span>${deliveryText}</span>
            </div>
          </div>
          <div class="order-total" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; font-weight: 600; font-size: 16px;">
            <span>${t('order_total')}</span>
            <span>${grandTotal}</span>
          </div>
        </div>
      `;
    }).join('');
  } else {
    ordersHtml = `<div class="empty"><h3>${t('no_orders')}</h3><a href="index.html" class="btn btn-primary" style="margin-top:14px">${t('cart_empty_btn')}</a></div>`;
  }
  
  wrap.innerHTML = `
    <div class="account-layout">
      <aside class="account-side">
        <div class="avatar-container" style="position: relative; display: inline-block;">
          ${avatarHtml}
          <button id="change-photo-btn" class="change-photo-btn" style="position: absolute; bottom: -5px; right: -5px; width: 28px; height: 28px; border-radius: 50%; background: var(--accent); color: white; border: 2px solid var(--surface); cursor: pointer; font-size: 12px; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-image"></i></button>
        </div>
        <div class="uname" id="display-name">${u.name || u.email.split('@')[0]}</div>
        <div class="uemail" id="display-email">${u.email}</div>
        
        <div style="margin: 20px 0; padding: 12px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
          <div style="font-weight: 600; margin-bottom: 10px;"><i class="fa-solid fa-house"></i> ${t('address_info')}</div>
          <div style="font-size: 14px; line-height: 1.4;" id="display-address">${fullAddress}</div>
          <button id="edit-profile-btn" style="margin-top: 12px; padding: 6px 12px; font-size: 12px; background: var(--bg); border: 1px solid var(--line); border-radius: 20px; cursor: pointer;"><i class="fa-solid fa-pen-nib"></i> ${t('edit_profile')}</button>
        </div>
        
        <button class="logout" onclick="logout()">${t('logout')}</button>
      </aside>
      <div class="orders">
        <h2>${t('orders_t')}</h2>
        ${ordersHtml}
      </div>
    </div>
    
    <!-- Edit Profile Modal -->
    <div id="profile-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 10000; align-items: center; justify-content: center;">
      <div style="background: var(--surface); border-radius: 16px; padding: 28px; width: 90%; max-width: 500px; max-height: 85vh; overflow-y: auto;">
        <h3 style="margin-bottom: 20px;"><i class="fa-solid fa-pen-nib"></i> ${t('edit_profile')}</h3>
        
        <div class="field" style="margin-bottom: 15px;">
          <label>${t('f_name')}</label>
          <input type="text" id="edit-name" value="${(u.name || '').replace(/"/g, '&quot;')}" placeholder="${t('f_name')}" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--ink);">
          <div class="field-error" id="name-error" style="color: var(--accent); font-size: 12px; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="field" style="margin-bottom: 15px;">
          <label>${t('f_email')}</label>
          <input type="email" id="edit-email" value="${u.email}" placeholder="${t('f_email')}" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--ink);">
          <div class="field-error" id="email-error" style="color: var(--accent); font-size: 12px; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="field" style="margin-bottom: 15px;">
          <label>${t('f_city')}</label>
          <input type="text" id="edit-city" value="${address.city}" placeholder="${t('f_city')}" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--ink);">
          <div class="field-error" id="city-error" style="color: var(--accent); font-size: 12px; margin-top: 4px; display: none;"></div>
        </div>
        
        <div class="field" style="margin-bottom: 15px;">
          <label>${t('f_street')}</label>
          <input type="text" id="edit-street" value="${address.street}" placeholder="${t('f_street')}" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--ink);">
        </div>
        
        <div class="field" style="margin-bottom: 15px;">
          <label>${t('f_apartment')}</label>
          <input type="text" id="edit-apartment" value="${address.apartment}" placeholder="${t('f_apartment')}" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--ink);">
        </div>
        
        <div style="display: flex; gap: 12px; margin-top: 20px;">
          <button id="save-profile" class="btn btn-primary">${t('save')}</button>
          <button id="close-profile-modal" class="btn btn-ghost">${t('cancel')}</button>
        </div>
      </div>
    </div>
  `;
  
  //фото
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);
  
  const changePhotoBtn = document.getElementById('change-photo-btn');
  if (changePhotoBtn) {
    changePhotoBtn.addEventListener('click', () => {
      fileInput.click();
    });
  }
  
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const base64 = event.target.result;
        if (saveProfilePhoto(u.email, base64)) {
          toast(getLang() === 'ky' ? 'Сүрөт жаңыртылды' : 'Фото обновлено');
          renderAccount();
        }
      };
      reader.readAsDataURL(file);
    } else {
      toast(getLang() === 'ky' ? 'Сүрөт тандаңыз' : 'Выберите изображение');
    }
  });
  
  const editBtn = document.getElementById('edit-profile-btn');
  const modal = document.getElementById('profile-modal');
  const closeModal = document.getElementById('close-profile-modal');
  const saveBtn = document.getElementById('save-profile');
  
  function clearErrors() {
    ['name-error', 'email-error', 'city-error'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
  }
  
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      clearErrors();
      if (modal) modal.style.display = 'flex';
    });
  }
  
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }
  
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      clearErrors();
      
      const newName = document.getElementById('edit-name')?.value || '';
      const newEmail = document.getElementById('edit-email')?.value || '';
      const newCity = document.getElementById('edit-city')?.value || '';
      const newStreet = document.getElementById('edit-street')?.value || '';
      const newApartment = document.getElementById('edit-apartment')?.value || '';
      
      let hasError = false;
      
      const nameValidation = validateName(newName);
      if (!nameValidation.valid) {
        const nameError = document.getElementById('name-error');
        if (nameError) {
          nameError.textContent = nameValidation.message;
          nameError.style.display = 'block';
        }
        hasError = true;
      }
      
      const emailValidation = validateEmail(newEmail);
      if (!emailValidation.valid) {
        const emailError = document.getElementById('email-error');
        if (emailError) {
          emailError.textContent = emailValidation.message;
          emailError.style.display = 'block';
        }
        hasError = true;
      }
      
      if (newEmail !== u.email) {
        const users = getUsers();
        if (users[newEmail.toLowerCase().trim()]) {
          const emailError = document.getElementById('email-error');
          if (emailError) {
            emailError.textContent = getLang() === 'ky' ? 'Бул e-mail башка колдонуучуда бар' : 'Этот email уже используется';
            emailError.style.display = 'block';
          }
          hasError = true;
        }
      }
      
      const cityValidation = validateCity(newCity);
      if (!cityValidation.valid) {
        const cityError = document.getElementById('city-error');
        if (cityError) {
          cityError.textContent = cityValidation.message;
          cityError.style.display = 'block';
        }
        hasError = true;
      }
      
      if (hasError) return;
      
      const updates = {
        name: newName,
        email: newEmail,
        address: {
          city: newCity,
          street: newStreet,
          apartment: newApartment
        }
      };
      
      if (updateUserProfile(u.email, updates)) {
        toast(getLang() === 'ky' ? 'Профиль жаңыртылды' : 'Профиль обновлён');
        if (modal) modal.style.display = 'none';
        renderAccount();
      } else {
        toast(getLang() === 'ky' ? 'Ката кетти' : 'Ошибка при сохранении');
      }
    });
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
}

/*шапка и подвал*/
function renderHeader(){
  const h = document.querySelector('.site-header'); if(!h) return;
  const page = document.body.dataset.page || '';
  const lang = getLang();
  const user = currentUser();
  const userBlock = user
    ? `<a href="account.html" class="icon-btn" title="${t('nav_account')}"><i class="fa-solid fa-circle-user"></i></a>`
    : `<a href="auth.html" class="btn btn-ghost">${t('login')}</a>`;
  h.innerHTML = `
    <div class="container header-inner">
      <a href="index.html" class="logo"><span class="dot"></span>Букля</a>
      <nav class="nav">
        <a href="index.html" class="${page==='index'?'active':''}">${t('nav_catalog')}</a>
        <a href="about.html" class="${page==='about'?'active':''}">${t('nav_about')}</a>
        <a href="contacts.html" class="${page==='contacts'?'active':''}">${t('nav_contacts')}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switch" role="group" aria-label="${t('language')}">
          <button data-lang="ky" class="${lang==='ky'?'active':''}">KY</button>
          <button data-lang="ru" class="${lang==='ru'?'active':''}">RU</button>
        </div>
        <button class="icon-btn theme-btn" title="${t('theme')}">${getTheme()==='dark'?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'}</button>
        ${userBlock}
        <a href="cart.html" class="btn btn-ghost cart-btn">${t('nav_cart')} <span class="cart-count hidden">0</span></a>
      </div>
    </div>`;
  h.querySelectorAll('.lang-switch button').forEach(b=>{
    b.addEventListener('click',()=>setLang(b.dataset.lang));
  });
  const themeBtn = h.querySelector('.theme-btn');
  if(themeBtn) themeBtn.addEventListener('click', toggleTheme);
  
  addHeaderSearch();
}

function renderFooter(){
  const f = document.querySelector('.site-footer'); if(!f) return;
  f.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div><h4>Букля</h4><p>${getLang()==='ky'?'Кыргызстандагы заманбап китеп дүкөнү. Бишкек, Чүй пр. 114.':'Современный книжный магазин в Кыргызстане. Бишкек, пр. Чуй 114.'}</p></div>
        <div><h4>${t('nav_catalog')}</h4>
          <a href="index.html">${t('f_study')}</a>
          <a href="index.html">${t('f_fiction')}</a>
          <a href="index.html">${t('f_kids')}</a></div>
        <div><h4>${getLang()==='ky'?'Маалымат':'Информация'}</h4>
          <a href="about.html">${t('nav_about')}</a>
          <a href="contacts.html">${t('nav_contacts')}</a>
          <a href="cart.html">${t('nav_cart')}</a></div>
        <div><h4>${t('nav_contacts')}</h4><p>+996 (700) 123-456</p><p>booklya@gmail.com</p></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Букля.</span><span>Бишкек · Кыргызстан</span></div>
    </div>`;
}

/*локлизация*/
function applyI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.documentElement.lang = getLang();
}

/*иинциализация*/
document.addEventListener('DOMContentLoaded', ()=>{
  renderHeader();
  renderFooter();
  applyI18n();
  updateCartBadge();
  renderSlider();
  renderCatalog();
  renderFilterSidebar();
  renderCart();
  renderAccount();
  initContactForm();
  initUnifiedAuth();
  if (typeof initPaymentPage === 'function') initPaymentPage();

  document.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link && link.href && link.target !== '_blank' && link.host === window.location.host && !link.hash) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = link.href;
      }, 250); 
    }
  });
  
  document.querySelectorAll('.filters .chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
      document.querySelectorAll('.filters .chip').forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const sel = document.getElementById('category-select');
      if (sel) sel.value = chip.dataset.filter;
      renderCatalog(chip.dataset.filter);
    });
  });
});
window.BOOKS = BOOKS;
window.getCart = getCart;
window.getLang = getLang;
window.localized = localized;
window.updateCartBadge = updateCartBadge;
window.currentUser = currentUser;
window.fmt = fmt;
window.toggleSidebar = toggleSidebar;
