(function(t){function n(n){for(var o,i,s=n[0],u=n[1],c=n[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,i=1;i<e.length;i++){var u=e[i];0!==r[u]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c9feef14"}[t]+".js"}function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e=r[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=r[t]=[n,o]}));n.push(e[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var e=r[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,e[1](c)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"0aa4":function(t,n,e){},"137a":function(t,n,e){},"35ee":function(t,n,e){},"38a1":function(t,n,e){"use strict";var o=e("35ee"),r=e.n(o);r.a},"3f86":function(t,n,e){},5811:function(t,n,e){"use strict";var o=e("3f86"),r=e.n(o);r.a},"7bd9":function(t,n,e){"use strict";var o=e("95e4"),r=e.n(o);r.a},"8b01":function(t,n,e){"use strict";var o=e("a358"),r=e.n(o);r.a},"95e4":function(t,n,e){},"9ea0":function(t,n,e){"use strict";var o=e("137a"),r=e.n(o);r.a},a358:function(t,n,e){},c161:function(t,n,e){"use strict";var o=e("0aa4"),r=e.n(o);r.a},cd49:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("div",{staticClass:"logo"}),e("router-link",{attrs:{to:"/protocols"}},[t._v("протоколы")]),e("router-link",{attrs:{to:"/resolutions"}},[t._v("решения спб мас")]),e("router-link",{attrs:{to:"/regulations"}},[t._v("устав")]),e("router-link",{attrs:{to:"/post-editor"}},[t._v("новая запись")])],1),e("router-view",{attrs:{id:"router-view"}})],1)},a=[],i=(e("38a1"),e("2877")),s={},u=Object(i["a"])(s,r,a,!1,null,null,null),c=u.exports,l=e("8c4f"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._l(t.posts,(function(n){return e("router-link",{staticClass:"post-container",attrs:{to:{name:"single-post",params:{postId:n._id}},href:"/protocols/"+n._id}},[e("div",{staticClass:"post-text-preview",domProps:{innerHTML:t._s(n.text)}}),e("div",{staticClass:"post-author"},[t._v(t._s(n.author))])])})),1)},f=[],d=e("bc3a"),v=e.n(d),h=o["a"].extend({name:"protocols",data:function(){return{posts:[]}},watch:{},mounted:function(){var t=this;v.a.get("http://172.16.4.116:8000/api/posts").then((function(n){console.log(n.data),t.posts=n.data}))},beforeDestroy:function(){},beforeMount:function(){},methods:{}}),m=h,g=(e("c161"),Object(i["a"])(m,p,f,!1,null,null,null)),b=g.exports,_=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"white-space":"pre-line","text-align":"left"}},[e("h1",[t._v("Устав СПб МАС")]),t._v("\n\t«УТВЕРЖДЕН»\n\tОбщим собранием учредителей\n\tот «16» декабря 2014 года\n\t(Протокол № 1 от 16.12.2014)\n\n\t«СОГЛАСОВАН»\n\tПрезидиумом\n\tМеждународной общественной организации\n\t«Международная общественная академия связи»\n\t«16» декабря 2014 года\n\t(Протокол № _____ от 16.12.2014)\n\tУСТАВ\n\n\tРегиональной общественной организации\n\t«Санкт-Петербургское отделение\n\tМеждународной общественной организации «Международная общественная академия связи»\n\tСанкт-Петербург\n\t2014 г.\n\t1. ОБЩИЕ ПОЛОЖЕНИЯ\n\n\t1.1. Региональная общественная организация «Санкт-Петербургское отделение Международной общественной организации «Международная общественная академия связи» (в дальнейшем Организация) является некоммерческой корпоративной организацией — добровольным объединением граждан, объединившихся в установленном законом порядке на основе общности их интересов для достижения целей, предусмотренных настоящим Уставом.\n\t1.2. Организация входит в структуру Международной общественной организации «Международная общественная академия связи» (далее – «Академия») и является ее отделением, действующим на территории Санкт-Петербурга.\n\t1.3. Организационно-правовая форма Организации – Общественная организация.\n\t1.4. Организация действует на территории Санкт-Петербурга.\n\t1.5. Организация осуществляет свою деятельность в соответствии с Конституцией Российской Федерации, Гражданским Кодексом РФ, Федеральным Законом «Об общественных объединениях», Законами РФ, другим законодательством, действующим на территории Российской Федерации, Уставом Академии и настоящим Уставом.\n\t1.6. В соответствии с действующим законодательством Организация считается созданной с момента принятия решения о её создании. Организация приобретает права юридического лица с момента её государственной регистрации в установленном порядке, имеет в собственности обособленное имущество и отвечает по обязательствам этим имуществом, может от своего имени приобретать и осуществлять имущественные и личные неимущественные права, нести обязанности, быть истцом и ответчиком в суде, арбитражном и третейском судах.\n\t1.7. Организация имеет в собственности обособленное имущество, самостоятельный баланс, расчетный, валютный и другие счета в банковских учреждениях, круглую печать со своим полным наименованием на русском языке. Организация может иметь штампы и бланки со своим наименованием.\n\t1.8. Члены Организации не сохраняют имущественные права на переданное ими в собственность Организации имущество, в том числе на членские взносы.\n\t1.9. Члены Организации не отвечают по обязательствам организации, в которой участвуют в качестве членов, а Организация не отвечает по обязательствам своих членов.\n\t1.10. Деятельность Организации является гласной, а информация об учредительных и программных документах – общедоступной.\n\t1.11. Полное наименование Организации:\n\tРегиональная общественная организация «Санкт-Петербургское отделение Международной общественной организации «Международная общественная академия связи».\n\t1.12. Сокращённое наименование Организации: РОО «СПб отделение «МАС».\n\t1.13. Полное наименование Организации на английском языке: Regional public organization «St. Petersburg Branch of the International Telecommunication Academy».\n\t1.14. Сокращенное наименование Организации на английском языке: RPO «SPb Branch of ITA».\n\t1.15. Место нахождение постоянно действующего руководящего органа Организации:\n\t191086, Санкт-Петербург, набережная реки Мойки, дом 61, лит. А ком. 325\n\n\t2. ЦЕЛИ И ВИДЫ ДЕЯТЕЛЬНОСТИ ОРГАНИЗАЦИИ.\n\n\t2.1. Целью Организации является развитие творческих связей и делового сотрудничества в области связи, интеграция российского и международного научного, творческого потенциала, а также:\n\t— содействие созданию интеллектуальной общественной инфраструктуры в области связи;\n\t— проведение прогностических и экономических исследований по проблемам развития телекоммуникаций во взаимосвязи с развитием инфраструктуры общества;\n\t— содействие созданию электронных информационных систем и баз данных и их разработка и реализация;\n\t— разработка и внедрение инновационных технологий в области связи на основе использования передового отечественного и международного опыта, расширения межнационального и международного сотрудничества;\n\t— содействие развитию различных форм организации научно-исследовательской, учебной, методической и другой работы в области связи и их реализации, в том числе:\n\tэкспертиза, оценка качества их исполнения и их аккредитация.\n\n\t2.2. Для претворения в жизнь уставных целей Организации в соответствии с действующим законодательством осуществляет следующую деятельность:\n\t— осуществляет научную, научно-исследовательскую, научно-информационную деятельность в области связи;\n\t— организует и проводит конференции, семинары, «круглые столы», форумы, встречи, выставки, иные общественные мероприятия, направленные на достижение уставных целей;\n\t— осуществляет методическую, консультационную и просветительскую деятельность, направленную на достижение уставных целей;\n\t— осуществляет полиграфическую деятельность, деятельность по изданию литературы и печатной продукции (книг, методических пособий, буклетов), направленную на достижение уставных целей;\n\t— взаимодействует с аналогичными общественными организациями, научными организациями, органами государственной власти и местного самоуправления, коммерческими и некоммерческими организациями и учреждениями, физическими лицами для достижения уставных целей;\n\t— осуществляет информационную деятельность в электронных и печатных средствах массовой информации и информационных сетях в порядке, определенном действующим законодательством Российской Федерации;\n\t— представляет и защищает профессиональные права и интересы членов Организации.\n\n\t2.3. Организация для достижения уставных целей может осуществлять предпринимательскую деятельность лишь постольку, поскольку это служит достижению целей, ради которых она создана, и соответствует этим целям.\n\t2.4. Предпринимательская деятельность осуществляется Организацией в соответствии с Гражданским кодексом РФ, другими законодательными актами РФ. Организация может создавать хозяйственные общества, а также приобретать имущество, предназначенное для ведения предпринимательской деятельности. Не допускается участие Организации в хозяйственных обществах совместно с другими лицами.\n\t2.5. Предпринимательской деятельностью Организации является:\n\t— реализация печатной продукции по тематике Организации;\n\t— проведение семинаров и тренингов по тематике Организации;\n\t— оказание информационных и консультационных услуг по тематике Организации;\n\t— разработка инновационных проектов в области связи;\n\t— приобретение и реализация ценных бумаг, имущественных и неимущественных прав, участие в хозяйственных обществах.\n\t2.6. Доходы от предпринимательской деятельности используются только для выполнения уставных целей и не могут перераспределяться между членами Организации.\n\t3. ЧЛЕНЫ ОРГАНИЗАЦИИ.\n\n\t3.1. Членство в Организации является добровольным.\n\t3.2. Членами Организации являются члены Академии — физические лица — ученые и специалисты, объединившиеся на основе общих профессиональных и творческих интересов, работающие в городе Санкт-Петербурге, признающие Устав и регулярно уплачивающие членские взносы.\n\t3.3. Прием граждан осуществляется Президиумом Академии или уполномоченным органом регионального отделения после подачи заявления и документа, подтверждающего уплату вступительного взноса.\n\tРешение принимается простым большинством голосов членов Президиума Академии, присутствовавших на заседании. В Академии может быть предусмотрено Почетное членство. Почетными членами становятся лица, внесшие значительный вклад в развитие Академии. Почетное членство присваивается Президиумом. Статус Почетного члена определяется положением, утвержденным Президиумом Академии.\n\t3.4. Величина вступительного и членских взносов, порядок их внесения определяются Генеральной ассамблеей Академии.\n\t3.5. Члены Академии имеют равные права и несут равные обязанности.\n\t3.6. Члены Академии имеют право:\n\t— избирать и быть избранными в руководящие и контрольные органы Академии, участвовать в управлении Академии;\n\t— входить в Академию и выходить из нее по заявлению;\n\t— участвовать в мероприятиях, проводимых Академией;\n\t— пользоваться учебно-методическими, научными, информацион¬ными разработками Академии;\n\t— пользоваться помощью Академии в защите социальных и иных прав и законных интересов;\n\t— пользоваться любыми льготами, установленными для членов Академии;\n\t— лично участвовать при обсуждении любого вопроса, касающегося его прав и обязанностей;\n\t— получать информацию о деятельности Академии, знакомиться с ее бухгалтерской и иной документацией;\n\t— обжаловать решения органов Академии, влекущие гражданско-правовые последствия, в случаях и в порядке, которые предусмотрены законом;\n\t— требовать, действуя от имени Академии, возмещения причиненных Академии убытков;\n\t— оспаривать, действуя от имени Академии, совершенные ею сделки и требовать применения последствий их недействительности, а также применения последствий недействительности ничтожных сделок Академии;\n\t— безвозмездно пользоваться оказываемыми Академией услугами.\n\t— свободно выйти из членов Академии.\n\n\t3.7. Член Академии обязан:\n\t— соблюдать Устав;\n\t— активно содействовать реализации стоящих перед Академией уставных целей и задач;\n\t— своевременно уплачивать членские и иные имущественные взносы;\n\t— не совершать действий, дискредитирующих Академию.\n\t3.8. Членство в Академии прекращается в случаях:\n\t— выхода из Академии по собственному желанию;\n\t— исключения из Академии.\n\t3.9. Член Академии может выбыть из Академии по собственному желанию, сделав об этом письменное уведомление Президиуму Академии.\n\t3.10. Президиум может своим решением исключить из членов Академии, если деятельность члена Академии противоречит уставным целям и задачам, а также в случае неуплаты установленных членских взносов, за неоднократное невыполнение решений руководящих органов Академии, за самоустранение от работы в Академии.\n\t3.11. При выходе или исключении члена из Академии вступительные и членские взносы возврату не подлежат.\n\t3.12. Членство в Академии неотчуждаемо. Осуществление прав члена Академии не может быть передано другому лицу.\n\n\t4. ПРАВА И ОБЯЗАННОСТИ ОРГАНИЗАЦИИ.\n\n\t4.1. Для обеспечения выполнения уставных целей и задач в соответствии с действующим законодательством Организация имеет право:\n\t— участвовать в выработке решений органов государственной власти и местного самоуправления по вопросам уставной деятельности;\n\t— свободно распространять информацию о своей деятельности;\n\t— создавать хозяйственные общества с правами юридического лица;\n\t— создавать некоммерческие организации, в том числе образовательные, научные учреждения;\n\t— учреждать общественные объединения, их союзы и ассоциации, в том числе международные;\n\t— учреждать средства массовой информации;\n\t— организовывать и проводить конгрессы, форумы, выставки, конференции, семинары, симпозиумы, конкурсы, лекции по проблемам связи;\n\t— совершать любые юридические действия в соответствии с действующим законодательством и Уставом со всеми заинтересованными лицами, как на территории Российской Федерации, так и за рубежом;\n\t— представлять и защищать свои права, законные интересы своих членов в органах государственной власти, органах местного самоуправления, общественных объединениях;\n\t— получать ссуды, кредиты и гарантии, приобретать ценные бумаги.\n\t4.2. Организация обязана:\n\t— соблюдать законодательство РФ, общепризнанные принципы и нормы международного права, касающиеся сферы ее деятельности, положения настоящего Устава;\n\t— ежегодно публиковать отчеты об использовании своего имущества или обеспечивать доступность ознакомления с указанным отчетом;\n\t— ежегодно информировать орган, регистрирующий Организацию о продолжении своей деятельности в соответствии с требованием действующего законодательства;\n\t— оказывать содействие представителям органа, регистрировавшего Организацию, в ознакомлении со своей деятельностью в связи с достижением уставных целей и соблюдением законодательства.\n\n\t5. ОРГАНЫ УПРАВЛЕНИЯ И КОНТРОЛЯ ОРГАНИЗАЦИИ\n\n\t5.1. Высшим руководящим органом Организации является Общее собрание членов Организации (далее – «Общее собрание»).\n\t5.2. К компетенции Общего собрания относится решение следующих вопросов:\n\t5.2.1. утверждение и изменение устава Организации;\n\t5.2.2. определение порядка приема в состав членов Организации и исключения из числа ее членов, кроме случаев, если такой порядок определен законом;\n\t5.2.3. образование исполнительного органа Организации, ее руководящего и контрольно-ревизионных органов и досрочное прекращение их полномочий;\n\t5.2.4. утверждение годовых отчетов и бухгалтерской (финансовой) отчетности Организации;\n\t5.2.5. принятие решений о создании коммерческих и некоммерческих организаций, об участии в таких организациях, о создании филиалов и об открытии представительств Организации;\n\t5.2.6. принятие решений о реорганизации и ликвидации Организации, о назначении ликвидационной комиссии и об утверждении ликвидационного баланса;\n\t5.2.7. определение приоритетных направлений деятельности Организации, принципов образования и использования имущества Организации;\n\t5.2.8. утверждение отчетов Президиума и Ревизора;\n\t5.2.9. принятие решений о размере и порядке уплаты членами членских и иных имущественных взносов.\n\t5.2.10. избрание Ревизора и назначение аудиторской организации или индивидуального аудитора Организации.\n\t5.3. Общее собрание членов проводится не реже одного раза в два года.\n\t5.4. Общее собрание членов правомочно, если на нем присутствуют более половины членов Организации.\n\t5.5. Принятие решений по вопросам, указанным в пунктах 5.2.1., 5.2.2., 5.2.3, 5.2.4, 5.2.5., 5.2.6, 5.2.7, 5.2.9, 5.2.10. настоящего Устава, относится к исключительной компетенции Общего собрания, решения по указанным вопросам принимаются квалифицированным большинством голосов 2/3 от числа присутствующих на Общем собрании членов Организации.\n\t5.6. Решения по остальным вопросам Общего собрания принимаются большинством голосов членов Организации, присутствующих на Общем собрании.\n\t5.7. Внеочередное Общее собрание членов созывается по требованию Президиума, Председателя, Ревизора, либо по требованию не менее одной трети членов Организации.\n\t5.8. Члены Общего собрания выполняют свои обязанности на добровольной основе.\n\t5.9. Постоянно действующим коллегиальным исполнительным органом Организации является Президиум Организации (далее – «Президиум»), который руководит Организацией период между Общими собраниями.\n\t5.10. Президиум избирается Общим собранием из числа членов Организации сроком на 2 (два) года.\n\t5.11. Президиум подотчетен Общему собранию. Президиум Организации состоит из Председателя, Заместителя председателя, ученого секретаря и членов Президиума. Президиум возглавляет Председатель Президиума. Количественный состав Президиума определяется Общим собранием.\n\t5.12. Президиум собирается по мере необходимости, но не реже одного раза в квартал. Заседания Президиума правомочны в случае присутствия на заседании более половины от числа членов Президиума.\n\t5.13. Решения на заседаниях Президиума принимаются простым большинством от числа присутствующих на заседании членов Президиума.\n\t5.14. Президиум осуществляет все права юридического лица от имени Организации и исполняет ее обязанности.\n\t5.15. В силу своей компетенции Президиум решает следующие вопросы:\n\t— в период между Общими собраниями членов осуществляет общее руководство её деятельностью;\n\t— обеспечивает выполнение решений Общего собрания Организации;\n\t— распоряжается имуществом и средствами Организации;\n\t— разрабатывает и утверждает финансовый план проектов Организации и вносит в него изменения;\n\t— утверждает штатное расписание Организации;\n\t— рассматривает акты проверки Ревизора;\n\t— утверждает Положение о контрольно-ревизионном органе (Ревизоре) Организации;\n\t— разрабатывает и утверждает целевые программы (проекты) деятельности Организации;\n\t— утверждает сметы расходов Организации;\n\t— определяет наиболее эффективные формы использования финансовых, материальных, трудовых ресурсов Организации;\n\t— определяет порядок создания, размеры и использование целевых и специальных фондов и резервов Организации, приобретения акций и других ценных бумаг;\n\t— определяет место, дату проведения Общего собрания Организации;\n\t— решает спорные вопросы между членами Организации;\n\t— отчитывается о проделанной работе пред Общим собранием;\n\t— постоянно взаимодействует с органами государственной власти и местного самоуправления, коммерческими и некоммерческими организациями в решении проблем, связанных с деятельностью Организации и обеспечении целей Организации;\n\t— решает иные вопросы, не отнесенные к компетенции Общего собрания.\n\t5.16. Единоличным исполнительным органом Организации является Председатель Президиума Организации (далее – «Председатель»).\n\t5.17. Председатель избирается Общим собранием из числа членов Президиума Организации сроком на 2 (два) года.\n\t5.18. Председатель без доверенности представляет интересы Организации во всех государственных органах, включая судебные и арбитражные, предприятиях и организациях, распоряжается имуществом и денежными средствами, подписывает договоры и распоряжения, возглавляет Президиум Организации. Полномочия Председателя подтверждаются протоколом о его избрании на эту должность.\n\t5.19. К компетенции Председателя относится:\n\t— право без доверенности распоряжаться имуществом и денежными средствами в рамках утверждённой сметы;\n\t— обеспечение выполнение решений Общего собрания и Президиума;\n\t— руководство работой Президиума Организации.\n\t— представление Организация во всех государственных, общественных, международных и иных организациях, в отношениях с другими предприятиями, организациями, учреждениями без доверенности;\n\t— обеспечивает выполнение решений Общего собрания, Президиума;\n\t— заключение договоров, сделок, соглашений в соответствии с действующим законодательством и настоящим Уставом;\n\t— подписание финансовых и иных документов в пределах своей компетенции;\n\t— представление на заседании Президиума штатного расписания Организации;\n\t— открытие и закрытие счетов в банковских учреждениях.\n\t5.20. Председатель Президиума представляет отчёт Общему собранию и Президиуму о своей работе.\n\t5.21. На работников Организации, работающих на штатной основе, распространяется действие соответствующих статей законодательства Российской Федерации о труде и социальном страховании.\n\t5.22. По решению Общего собрания полномочия членов Президиума и Председателя Президиума могут быть досрочно прекращены в случаях грубого нарушения ими своих обязанностей, обнаружившейся неспособности к надлежащему ведению дел или при наличии иных серьезных оснований.\n\t5.23. Заместитель Председателя избирается Президиумом из числа членов Президиума Организации сроком на 2 (два) года.\n\t5.24. Заместитель Председателя:\n\t— отвечает за сферу деятельности, порученную ему Председателем;\n\t— осуществляет иные функции, возложенные на него Президиумом;\n\t— во время отсутствия Председателя выполняет его обязанности и несёт за это ответственность перед Председателем и Президиумом;\n\t— действует на основании доверенности.\n\t5.25. Учёный секретарь назначается Председателем Организации из числа членов Президиума Организации сроком на 2 (два) года.\n\t— осуществляет координацию научной деятельности Организации;\n\t— несёт ответственность за организацию и подготовку Общих собраний, заседаний Президиума;\n\t— осуществляет подготовку повестки дня для Общего собрания и заседаний Президиума, осуществляет подбор необходимых материалов по повестке дня, осуществляет оформление протоколов по принятым решениям на Общих собраниях и на заседаниях Президиума;\n\t— осуществляет подготовку проектов приказов и распоряжений Председателя.\n\t5.26. Контрольно-ревизионным органом Организации является Ревизор Организации (далее – «Ревизор»). Ревизор работает на основании настоящего Устава и Положения о деятельности Ревизора, которое утверждается Президиумом.\n\t5.27. В функции Ревизора входит:\n\t— проверка деятельности Организации, Президиума, Председателя Организации, проверка соблюдения действующего законодательства и настоящего Устава;\n\t— осуществление проверки финансово-хозяйственной деятельности руководящих и исполнительных органов Организации;\n\t— проверка постановки делопроизводства, учёта, отчётности, контроля, исполнения решений руководящих органов Организации;\n\t— подготовка и представление заключений по итогам проверки.\n\t5.28. Ревизор избирается на Общем собрании из числа членов Организации, не входящих в состав органов управления Организации. Срок полномочий Ревизора 2 (два) года.\n\t5.29. Ревизионная проверка проводится не реже 1 раза в год. При осуществлении проверки Ревизором может в согласованном с Президиумом порядке использовать в своей работе сотрудников Организации.\n\n\t6. ИМУЩЕСТВО И СРЕДСТВА ОРГАНИЗАЦИИ\n\n\t6.1. Организация может иметь в собственности или на ином вещном праве здания, строения, сооружения, жилой фонд, транспорт, оборудование, инвентарь, имущество, культурно-просветительного и оздоровительного назначения, денежные средства, акции, другие ценные бумаги и иное имущество, необходимое для материального обеспечения деятельности Организации, указанной в настоящем Уставе.\n\t6.2. Источниками формирования имущества Организации могут являться:\n\t— вступительные и членские взносы,\n\t— добровольные взносы и пожертвования;\n\t— банковские кредиты;\n\t— доходы от разрешенной законом предпринимательской деятельности, предусмотренной настоящим Уставом;\n\t— поступления от проводимых в соответствии с настоящим Уставом лекций, выставок, и иных мероприятий;\n\t— доходы, получаемые от собственности Организации;\n\t— доходы, получаемые от участия Организации в хозяйственных обществах;\n\t— другие, не запрещенные законом поступления.\n\n\t7. ПОРЯДОК ВНЕСЕНИЯ ИЗМЕНЕНИЙ И ДОПОЛНЕНИЙ В УСТАВ\n\n\t8.1 Изменения и дополнения настоящего Устава является исключительной компетенцией Общего собрания членов Организации.\n\t8.2 Решение о внесении изменений и дополнений в Устав считается принятым, если за него проголосовало квалифицированное большинство голосов 2/3 от числа присутствующих на Общем собрании Организации.\n\t8.3 Внесенные изменения приобретают юридическую силу с момента их государственной регистрации.\n\n\t8. ПОРЯДОК РЕОРГАНИЗАЦИИ И ЛИКВИДАЦИИ ОРГАНИЗАЦИИ.\n\n\t8.1. Деятельность Организации прекращается путем ее реорганизации или ликвидации.\n\t8.2. Реорганизация Организации осуществляется по решению Общего собрания членов Организации, принятому квалифицированным большинством голосов 2/3 от числа присутствующих на Общем собрании членов Организации.\n\t8.3. Организация по решению Общего собрания членов может быть преобразована в ассоциацию (союз), автономную некоммерческую организацию или фонд.\n\t8.4. Имущество Организации переходит после ее реорганизации к вновь возникшим юридическим лицам в порядке, предусмотренном Гражданским кодексом Российской Федерации.\n\t8.5. Ликвидация Организации осуществляется по решению Общего собрания членов Организации в соответствии с настоящим Уставом, а также по решению суда.\n\t8.6. Организация ликвидируется также в случае ликвидации Академии.\n\t8.7. Ликвидация Организации осуществляется по решению Общего собрания членов Организации, принятому квалифицированным большинством голосов 2/3 от числа присутствующих на Общем собрании членов Организации.\n\t8.8. Для ликвидации Организации Общим собранием членов Организации назначается ликвидационная комиссия.\n\t8.9. Имущество, оставшееся в результате ликвидации Организации, после удовлетворения требований кредиторов, расходуется на цели, предусмотренные настоящим Уставом, и не подлежит распределению между членами Организации.\n\t8.10. Заявление о ликвидации Организации направляется в уполномоченный орган для исключения Организации из Единого государственного реестра юридических лиц.\n\n\t10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ\n\n\t10.1. Организация обеспечивает доступность ознакомления с отчетом об использовании своего имущества лицам, имеющим на это право в соответствии с действующим законодательством.\n\t10.2. Внутренние споры, не урегулированные настоящим Уставом и которые члены Организации не смогли решить путем переговоров, решаются в судебном порядке в соответствии с действующим законодательством.\n\t10.3. Деятельность Организации основывается на принципах добровольности, равноправия, самоуправления и законности.\n\n\tСкачать устав в формате DOC можно по этой ссылке.\n")])}],w={},C=Object(i["a"])(w,_,y,!1,null,null,null),x=C.exports,O=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("здесь пока ничего нет")])])}],k={},P=Object(i["a"])(k,O,j,!1,null,null,null),E=P.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vue-editor",{ref:"vEditor",model:{value:t.content,callback:function(n){t.content=n},expression:"content"}}),e("div",{staticClass:"sub-menu"},[e("div",{staticClass:"post-button",on:{click:function(n){return t.post()}}},[t._v("опубликовать")]),e("div",[t._v("категории\n\t\t\t"),t._l(t.categories,(function(n,o){return e("span",{staticClass:"category-tag",on:{click:function(n){return t.deleteCategory(o)}}},[t._v(t._s(n))])})),t.newCategoryInput?e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategory,expression:"newCategory"}],staticClass:"author-input",domProps:{value:t.newCategory},on:{input:function(n){n.target.composing||(t.newCategory=n.target.value)}}}),e("span",{staticClass:"ok-button",on:{click:function(n){return t.confirmCategory()}}},[t._v("OK")])]):e("span",{staticClass:"big-plus-button",on:{click:function(n){return t.addNewCategory()}}},[t._v("+")])],2),e("div",[t._v("автор "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"author-input",domProps:{value:t.author},on:{input:function(n){n.target.composing||(t.author=n.target.value)}}})])])],1)},D=[],$=e("5873"),M=o["a"].extend({name:"post-editor",components:{VueEditor:$["a"]},data:function(){return{newCategory:"",newCategoryInput:!1,content:"",author:"",categories:new Array}},watch:{cabinetsData:{deep:!0,handler:function(t){}},activeDropDown:function(t,n){}},mounted:function(){},beforeDestroy:function(){},beforeMount:function(){},methods:{deleteCategory:function(t){this.categories.splice(t,1)},addNewCategory:function(){this.newCategoryInput=!0},confirmCategory:function(){this.newCategoryInput=!1,0!=this.newCategory.length&&this.categories.push(this.newCategory),this.newCategory=""},post:function(){var t=this.content;console.log(t),v.a.post("http://172.16.4.116:8000/api/new-post",{text:t}).then((function(t){console.log("posted:",t)}))}}}),S=M,T=(e("9ea0"),e("7bd9"),Object(i["a"])(S,I,D,!1,null,"1b82fda6",null)),A=T.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-content",domProps:{innerHTML:t._s(t.content)}})},N=[],B=o["a"].extend({name:"single-post",props:{postId:{type:String}},data:function(){return{content:"",author:""}},watch:{cabinetsData:{deep:!0,handler:function(t){}},activeDropDown:function(t,n){}},mounted:function(){},beforeDestroy:function(){},beforeMount:function(){var t=this,n=this.$route.params.postId;console.log("post id",n),v.a.post("http://172.16.4.116:8000/api/get-post",{postId:n}).then((function(n){console.log("single post"),console.log(n.data),t.content=n.data.text,t.author=n.data.author}))},methods:{}}),H=B,J=(e("8b01"),e("5811"),Object(i["a"])(H,L,N,!1,null,null,null)),R=J.exports;o["a"].use(l["a"]);var q=new l["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/protocols"},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}},{path:"/protocols",name:"protocols",component:b},{path:"/regulations",name:"regulations",component:x},{path:"/protocols",name:"protocols",component:b},{path:"/resolutions",name:"resolutions",component:E},{path:"/post-editor",name:"post-editor",component:A},{path:"/protocols/:postId",name:"single-post",component:R}]});o["a"].config.productionTip=!1,new o["a"]({router:q,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.f778261f.js.map