
let signoBandera=false;

function getColor(value) {
    let minusculas = JSON.stringify(value);
    minusculas = minusculas.toLocaleLowerCase();
            localStorage.setItem('ColorPiedra', minusculas  );
            console.log(value);
}

function imageSelected(signo){
    let btnSigno = document.getElementsByClassName("iconSimbol");
    console.log(signo);

    localStorage.setItem('signo', JSON.stringify(signo));

}

function inputEdad(rangoEdad){
    localStorage.setItem('rangoEdad', JSON.stringify(rangoEdad));
    let btnEdad = document.getElementsByClassName("age");
    /* for(let i=0;i<btnEdad.length;i++){
        btnEdad[i].disabled = true;
    } */
    colorDeLocalstorage = JSON.parse(localStorage.getItem('ColorPiedra'))
    console.log(colorDeLocalstorage);
    signoLocalStorage = JSON.parse(localStorage.getItem('signo'))
    console.log(signoLocalStorage);
    obtenerResultado(colorDeLocalstorage,signoLocalStorage);
}


const obtenerResultado = (color,signo) => {
    
    switch (color) {
        case 'rojo':
                const rojo = ["rubi","granate almandino","coral rojo","granate rodolita","espinela","cuarzo fresa"];
                const signosRelacionados=["aries","leo","capricornio"]
                if(signosRelacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,rojo);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = rojo[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
        case 'rosa':
                const rosa = ["zafiro rosa","espinela rosa","coral rosa","cuarzo rosa","kunzita","granate de malaya","morganita","topacio rosa","ópalo rosa","perla","granate rodolita","cuarzo estrella","turmalina rosa","circón rosa"];
                const signosRelacionad=["cancer",]
                if(signosRelacionad.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,rosa);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = rosa[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;    
        case 'verde':
                const verde = ["esmeralda","peridoto","prehnite","turmalina","agata","amazonita","apatito verde","venturina","sanguinaria","aguamarina","jadeita","malaquita","zafiro"];
                const signRelacionados=["cancer","tauro","libra","escorpio","sagitario","acuario"]
                if(signRelacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,verde);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = verde[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;    
            case 'azul':
                const azul = ["zafiro azul","tanzanita","topacio azul","circón azul","iolita","cianita","larimar","agata","aguamarina","calcedonia","drusa de azurita","jadeita","lapislazuli","sodalita","turquesa"];
                const signoRelaciona=["cancer","tauro","libra","acuario"]
                if(signoRelaciona.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,azul);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = azul[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break; 
            case 'amarillo':
                const amarillo = ["citrino","cuarzo","zafiro","circon","berilo","opalo","agata","apatito amarillo","opalo ojo de gato","granate de mali","cuarzo rutilo"];
                const signRelacionad=["aries","leo","capricornio"]
                if(signRelacionad.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,amarillo);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = amarillo[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break; 
            case 'morado':
                const morado = ["amatista","geoda de amatista","chaorita","zafiro morado"];
                const signosRelaconados=["virgo","sagitario","acuario"]
                if(signosRelaconados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,morado);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = morado[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break; 
            case 'naranja':
                const naranja= ["zafiro naranja","piedra solar","citrino","agata","opalo","turmalina","circon"];
                const signoReacionados=["aries","leo","capricornio","libra"]
                if(signoReacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,naranja);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = naranja[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
            case 'blanco':
                const blanco= ["piedra lunar","opalo","zafiro blanco","topacio","circon","escolecita","cuarzo"];
                const sgnosRelacionados=["capricornio","piscis"]
                if(sgnosRelacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,blanco);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray =blanco[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
            case 'cafe':
                const cafe= ["opalo marron","piedra lunar marron","cuarzo ahumado","ojo de tigre","escapolita","cuarzo rutilo","piedra solar estrella","turmalina marron"];
                const signosrelacionados=["virgo","capricornio","pscis"]
                if(signosrelacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,cafe);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = cafe[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                    
                }
            break;
            case 'gris':
                const gris= ["zafiro gris","perla","hematites","labradorita","gris plata nacar","pirita"];
                const signosRElacionados=["escorpio","capricornio","piscis"]
                if(signosRElacionados.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,gris);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray = gris[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
            case 'negro':
                const negro= ["obsidiana","zafiro negro","espinela","turmalina","escapolita"];
                const signosRelacionadoS=["escorpio","piscis"]
                if(signosRelacionadoS.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,negro);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray =negro[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
        default:
                const multicolor = ["amolita","agata multicolor","andalucita","opalo multicolor","crisocola","opalo de roca","agata de fuego","fluorita","jaspe","rubí","turmalina"];
                const signosRelacionad0s=["aries","acuario","capricornio","tauro","piscis","escorpio","libra","virgo","leo","sagitario","cancer","geminis"]
                if(signosRelacionad0s.find(zodiaco => zodiaco === signo)){
                    console.log("encontré un signo que se relaciona con el color");
                    buscarPiedrasEnJson(signo,multicolor);
                } else {
                    console.log("aun no llego a esta parte");
                    let primeraPiedraArray =multicolor[0];
                    mostrarEnPantalla( primeraPiedraArray ,signo);
                }
            break;
    }
}

function buscarPiedrasEnJson(signo,arregloDeColor){
    
    const descripcionesSignos = JSON.parse(descripcionSignos);
    switch (signo) {
        case 'aries':
            arregloEncontrado = descripcionesSignos.aries.piedrasAsociadas
            console.log(descripcionesSignos.aries.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos,'aries');
            break;
        case 'acuario':
            arregloEncontrado = descripcionesSignos.acuario.piedrasAsociadas
            console.log(descripcionesSignos.acuario.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'acuario');
            break;
        case 'tauro':
            arregloEncontrado = descripcionesSignos.tauro.piedrasAsociadas
            console.log(descripcionesSignos.tauro.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'tauro');
            break;
        case 'geminis':
            arregloEncontrado = descripcionesSignos.geminis.piedrasAsociadas
            console.log(descripcionesSignos.geminis.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'geminis');
            break;
        case 'cancer':
            arregloEncontrado = descripcionesSignos.cancer.piedrasAsociadas
            console.log(descripcionesSignos.cancer.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'cancer');
            break;
        case 'leo':
            arregloEncontrado = descripcionesSignos.leo.piedrasAsociadas
            console.log(descripcionesSignos.leo.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'leo');
            break;
        case 'virgo':
            arregloEncontrado = descripcionesSignos.virgo.piedrasAsociadas
            console.log(descripcionesSignos.virgo.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'virgo');
            break;
        case 'libra':
            arregloEncontrado = descripcionesSignos.libra.piedrasAsociadas
            console.log(descripcionesSignos.libra.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'libra');
            break;
        case 'escorpio':
            arregloEncontrado = descripcionesSignos.escorpio.piedrasAsociadas
            console.log(descripcionesSignos.escorpio.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'escorpio');
            break;
        case 'sagitario':
            arregloEncontrado = descripcionesSignos.sagitario.piedrasAsociadas
            console.log(descripcionesSignos.sagitario.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'sagitario');

            break;
        case 'capricornio':
            arregloEncontrado = descripcionesSignos.capricornio.piedrasAsociadas
            console.log(descripcionesSignos.capricornio.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'capricornio');
            break;
        case 'piscis':
            arregloEncontrado = descripcionesSignos.piscis.piedrasAsociadas
            console.log(descripcionesSignos.piscis.piedrasAsociadas);
            arreglosUnidos = arregloDeColor.concat(arregloEncontrado);
            console.log(arreglosUnidos);
            buscarSimilitudes(arreglosUnidos,'piscis');
            break;
        default:

            break;
    }

}

function buscarSimilitudes(array,signo){
        console.log(array.filter( (currentValue, currentIndex) => 
        array.indexOf(currentValue) !== currentIndex));
        let elemtosEncontrados = array.filter( (currentValue, currentIndex) => 
        array.indexOf(currentValue) !== currentIndex);
        //console.log(array);
        if(elemtosEncontrados.length === 0){
            console.log("arreglo vaci");
            let primerElemento = array[0];
            mostrarEnPantalla( primerElemento,signo);
        } else {
            mostrarEnPantalla( elemtosEncontrados[0],signo);
        }
        
    }

    function mostrarEnPantalla( primeraPiedraArray ,signo){
        //console.log(primeraPiedraArray);
        const piedraJSON = JSON.parse(piedras);
        const descripcionesSignos = JSON.parse(descripcionSignos);
        document.getElementById("resultDescriptionSigno").innerHTML = descripcionesSignos[signo].descripcion;
        document.getElementById("titleResult").innerHTML = piedraJSON[primeraPiedraArray].piedra;
        document.getElementById("resultDescription").innerHTML = piedraJSON[primeraPiedraArray].descripcion;
        document.getElementById("imgResult").src= piedraJSON[primeraPiedraArray].img;
        
    }

const descripcionSignos = `
{
    "acuario" : { 
        "piedrasAsociadas":["ojo de gato","lapislazulli","opalo","cuarzo","amatista","agata"],
        "descripcion" : "ACUARIO destaca por su personalidad atractiva,aunque a veces pueden llegar a ser muy independientes, pensativos e imaginativos."
    },
    "aries" : {
        "piedrasAsociadas":["granate","amatista","carniola","hematita","ojo de tigre","cuarzo rosa", "rubi"],
        "descripcion" : "ARIES líder por excelencia, impaciente y con mucha energía. El positivismo es parte de tu personalidad, así como la vitalidad y el dinamismo."
    },
    "tauro" : {
        "piedrasAsociadas":["cuarzo rosa","agata","crisocola","aventurina"],
        "descripcion" : "TAURO Personas pacientes y honradas, que actúan en busca de la estabilidad emocional."
    },
    "geminis" : {
        "piedrasAsociadas":["aguamarina","calcedonia","cristal de roca","ojo de tigre","ambar"],
        "descripcion" : "GEMINIS poseen una capacidad extraordinaria para afrontar las situaciones de la vida, ya que pueden identificar con facilidad los pros y contras de cada postura. Además, se ven fortalecidos por su poder comunicativo y negociador."
    },
    "cancer" : {
        "piedrasAsociadas":["rodonita","venturina","cuarzo rosa","calcita","carniola","piedra lunar"],
        "descripcion" : "CáNCER es el signo del amor y del dolor, los altibajos emocionales y el temperamento pasional. A través de su imaginación, este signo suele refugiarse del dolor bajo una coraza protectora. "
    },
    "leo" : {
        "piedrasAsociadas":["ojo de tigre","citrina","ambar","cristal de roca"],
        "descripcion" : "LEO Son seres llenos de vitalidad. Con una personalidad bastante fuerte y que resulta difícil de ignorar, Leo es conocido por ser independiente, ambicioso y estratega."
    },
    "virgo" : {
        "piedrasAsociadas":["sodalita","rutilo","amatista","ambar","ojo de tigre"],
        "descripcion" : "VIRGO son personas extremadamente detallistas, pendientes del orden y analíticas.Destaca por ser metódico, reservado y muy leal. "
    },
    "libra" : {
        "piedrasAsociadas":["crisocola","lapislazuli","jaspe","malaquita"],
        "descripcion" : "LIBRA la justicia, armonía y sentido moral son algunos de los valores que dominan. Los Libra son personas que siempre buscan estar rodeados de gente, ya que son seres tremendamente sociales. No obstante, a pesar de su simpatía y generosidad, los Libra también se caracterizan por ser personas inseguras y vulnerables."
    },
    "escorpio" : {
        "piedrasAsociadas":["malaquita","fluorita","agata","jaspe"],
        "descripcion" : "ESCORPIO Aunque puedan parecer tranquilos a simple vista, se caracterizan por ser muy activos e intensos en su día a día.."
    },
    "sagitario" :{
        "piedrasAsociadas":["lapislazuli","sodalita","azurita","amatista","malaquita"],
        "descripcion" : "SAGITARIO son sinceros, optimistas y positivos, se caracterizan por ser personas extremadamente inquietas y aventureras, capaces de superar todos los retos que se les ponen por delante."
    },
    "capricornio" : {
        "piedrasAsociadas":["onice","jaspe","cristal de roca","dumortierita","obsidiana"],
        "descripcion" : "CAPRICORNIO son personas constantes, tranquilas y muy trabajadoras. A veces, pueden llegar a ser muy insistentes y obsesivos con sus metas, ya que son extremadamente sacrificados.."
    },
    "piscis" : {
        "piedrasAsociadas":["agata","amatista","hematica","turquesa"],
        "descripcion" : "PISCIS son cariñosos, amables, sensibles y soñadores. Piscis atrae con fuerza a otros signos del zodíaco, a pesar de que a veces su imaginación resulte algo desconcertante, responden con amabilidad y tacto al dolor de los demás."
    }
}
`;

const piedras = `
{
    "granate" : {
        "piedra" : "Piedra Granate",
        "descripcion" : "La piedra granate es asociado directamente con la fe, la constancia para alcanzar los objetivos y el amor tanto de pareja como el amor en familia y amigos. Debido a este significado se considera como un excelente regalo que simboliza amistad y confianza. <br>El granate es un mineral formador de roca que pertenece al grupo de los nesosilicatos, y aunque la gente piensa que solo aparece en color rojo lo cierto es que se forma en varios ambientes geológicos y ocurre en gran variedad de tonalidades.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678202454/piedrasEditadas/granate_gbnyzj.jpg"
    },
    "amatista" : {
        "piedra" : "Piedra Amatista",
        "descripcion" : "La AMATISTA Ha sido utilizada desde la antigüedad, donde se le asociaba con la energía del fuego, la creatividad, la fidelidad, la paz y la realeza. También se sabe que los antiguos griegos usaban la piedra amatista con el objetivo de protegerse de los efectos de la embriaguez.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678201287/piedrasEditadas/cuarzo-amatista_1000px_1_ymhgpc.jpg"
    },
    "aguamarina" : {
        "piedra" : "Piedra Aguamarina",
        "descripcion" : "Esta gema se llamó así debido a que representa a los bastos océanos y al cielo en sus tonalidades. Debido a sus bellos colores en azul pálido y azul profundo los marineros usaban esta gema como amuleto de protección contra los peligros del mar, es decir creían era un regalo de las sirenas. La piedra aguamarina significa entonces coraje, salud y confianza. Además, se le asocia en la actualidad con la espiritualidad, con la paz mental y la reducción del estrés. Finalmente, también simboliza vitalidad, juventud, paz interior y felicidad.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678202819/piedrasEditadas/aguamarina_ftqwvk.png"
    },
    "zafiro naranja" : {
        "piedra" : "Piedra Zafiro naranja",
        "descripcion" : "El zafiro simboliza la verdad, la sinceridad y la lealtad.Ayuda a las personas que quiera expresar sus emociones, pensamientos y verdades más profundas de la manera más creativa.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678203883/piedrasEditadas/zaphiro_naranja_edit_m5gobd.jpg"
    },
    "esmeralda" : {
        "piedra" : "Piedra Esmeralda",
        "descripcion" : "Esta gema se caracteriza por presentar un color verde intenso que imita al verde de la naturaleza y de los extensos bosques de nuestro planeta, por tal razón se le asocia directamente con las energías fuertes de la madre tierra.Además, debido a su belleza y tonalidades verdes intensas se considera que es una piedra capaz de atraer la prosperidad, estabilidad financiera y se dice que puede brindar paz mental y emocional a sus dueños.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678202924/piedrasEditadas/esmeralda_qjhsbi.png"
    },
    "piedra lunar" : {
        "piedra" : "Piedra Lunar",
        "descripcion" : "Se cree que atrae el amor y la buena suerte, protege a los viajeros, libera las malas energías, protege sobre el deseo y los malos pensamientos y ayuda a encontrar el equilibrio en todos los ámbitos de la vida.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678204687/piedrasEditadas/lunar_w3wlad.jpg"
    },
    "rubi" : {
        "piedra" : "Piedra Rubí",
        "descripcion" : "La piedra rubí significa coraje, victoria y éxito, por tal razón, se piensa que atrae buena suerte, fortalece la positividad, atrae buenos negocios y te brinda la fuerza para acabar con tus actividades y alcanzar tus objetivos. Además, debido a su tonalidad muchas personas creen que logra atraer el amor de pareja y fortalecer el amor de familia o amigos.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678202547/piedrasEditadas/rub%C3%AD_s2lp9r.png"
    },
    "zafiro rosa" : {
        "piedra" : "Piedra Zafiro rosa",
        "descripcion" : "El zafiro rosa consigue calmar las emociones, enfocar al ser humano y libera sentimientos negativos. Elimina los pensamientos no deseados y enfoca la mente.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678204943/piedrasEditadas/zafiro_rosa_e3we6q.png"
    },
    "zafiro azul" : {
        "piedra" : "Piedra zafiro azul",
        "descripcion" : "Esta gema es una de las más codiciadas del mundo. Desde siempre esta piedra ha simbolizado la paz, la calma y la serenidad similar a lo que significan los océanos y el bello cielo azul. También muchas personas la utilizan para superar la timidez, aumentar la tolerancia y la introspección, debido a que es símbolo de espiritualidad.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678203210/piedrasEditadas/zafiro_azul_ywjbxa.png"
    },
    "opalo marron" : {
        "piedra" : "Piedra Ópalo marrón",
        "descripcion" : "El ópalo potencia la conciencia cósmica e induce visiones psíquicas y místicas, estimula la originalidad y la creatividad, ayudando a expresar el verdadero yo además de enseñarte a que lo que das acaba llegándote de vuelta.Psicológicamente potencia la autoestima y ayuda a entender tu propio potencial. También te aporta espontaneidad a nivel mental.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678205108/piedrasEditadas/opalo_marronE_snccxo.jpg"
    },
    "citrino" : {
        "piedra" : "Piedra Citrino",
        "descripcion" : "Este cristal mineral es bastante famoso debido a que se cree tiene la capacidad de atraer la felicidad y la abundancia hacia el hogar y vida de las personas que lo poseen. Además, es famosa como piedra protectora contra las energías tóxicas y negativas del ambiente y de las demás personas.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678203381/piedrasEditadas/citrino_xuo3qw.png"
    },
    "zafiro gris" : {
        "piedra" : "Piedra Zafiro gris",
        "descripcion" : "Esta gema es una de las más codiciadas del mundo. Desde siempre esta piedra ha simbolizado la paz, la calma y la serenidad similar a lo que significan los océanos y el bello cielo azul. También muchas personas la utilizan para superar la timidez, aumentar la tolerancia y la introspección, debido a que es símbolo de espiritualidad.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678205483/piedrasEditadas/zaphiro_grisedit_om3ezh.jpg"
    },
    "obsidiana" : {
        "piedra" : "Piedra Obsidiana",
        "descripcion" : "Potente piedra de crecimiento personal y transformación. Como piedra negra es usada para la protección, la limpieza y la purificación.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678205773/piedrasEditadas/Obsidian_qu4o18.png"
    },
    "amolita" : {
        "piedra" : "Piedra Amolita",
        "descripcion" : "Proporciona armonía en todos los niveles, una visión positiva y esplendorosa de la vida, alivia de miedos, te ayuda a verte a ti mismo de manera atractiva y seductora.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678205945/piedrasEditadas/amolita_anrt7p.jpg"
    },
    "agata" : {
        "piedra" : "Piedra Agata",
        "descripcion" : " Piedra de energía suave, conocida por aportar armonía y equilibrio. Fomenta la autoconfianza y la concentración y favorece el crecimiento espiritual, el amor y el coraje.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678206294/piedrasEditadas/agata_an1dsi.jpg"
    },
    "cuarzo rosa" : {
        "piedra" : "Piedra Cuarzo rosa",
        "descripcion" : "Conecta con el amor a uno mismo y el amor universal. Conecta con la paz interior y fomenta la realización personal. Es una piedra de sanación muy útil que permite liberar las emociones reprimidas en el corazón.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678206640/piedrasEditadas/cuarzo_rosa_n6tvmh.png"
    },
    "malaquita" : {
        "piedra" : "Piedra Malaquita",
        "descripcion" : "La malaquita es una piedra de transformación, limpieza y sanación.Es una importante piedra protectora ya que absorbe de una forma muy fácil las energías negativas del cuerpo. ",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678208175/piedrasEditadas/malaquitaE_pplcxr.jpg"
    },
    "crisocola" : {
        "piedra" : "Piedra Crisocola",
        "descripcion" : "La crisocola es una piedra tranquila que te ofrece apoyo, te ayuda a meditar y a comunicarte. Dentro del hogar expulsa todo tipo de energías negativas. Es benéfica para las relaciones que se han hecho difíciles, estabilizándolas tanto a nivel del hogar como las personales.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678208533/piedrasEditadas/terriell-scrimager-AR2hAsITHVI-unsplash_oftkxl.jpg"
    },
    "fluorita" : {
        "piedra" : "Piedra Fluorita",
        "descripcion" : "La fluorita se considera una piedra espiritual de limpieza, purificación y equilibrio. Tiene una energía muy sutil y eleva la vibración a través de la relajación de la mente.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678209284/piedrasEditadas/agate-665463_1920_ledbuo.jpg"
    },
    "lapislazuli" : {
        "piedra" : "Piedra Lapislazulli",
        "descripcion" : "Fortalece el sistema inmunológico, respiratorio y nervioso. Alivia las dolencias relacionadas con la garganta y la tiroides, dolores de cabeza y migrañas. Purifica la sangre de sustancias dañinas, como el cigarrillo o el alcohol. Ayuda a conciliar el sueño y a mejorar el descanso.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678210744/piedrasEditadas/lapisLazulli_k0k0nl.jpg"
    },
    "venturina" : {
        "piedra" : "Piedra Venturina",
        "descripcion" : "La Venturina o Aventurina, es conocida como la piedra de la buena ventura o piedra de la suerte y la salud.",
        "img" : "https://res.cloudinary.com/dzham2sp8/image/upload/v1678211050/piedrasEditadas/venturina_n4eevt.jpg"
    }
}
`;
