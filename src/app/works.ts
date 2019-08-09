export class Works {
  all = [
    {
      title: 'To ja',
      id: 'about',
      bg: 'me.png',
      bg2: 'me2.png',
    },
    {
      title: 'Ginger Barber',
      id: 'ginbar',
      bg: 'gingerbarber.png',
      bg2: 'gingerbarber2.png',
      screens: 'gingerbarber_screens.png',
      desc: "<p>Strona stworzona dla <strong>krakowskiego zakładu barberskiego</strong>. Razem we współpracy z <strong>Miaunek Design</strong>, twórczynią projektu graficznego, utworzyliśmy pin-up'owego one-page'a dla popularnych barberek.</p>",
      buttons: [{
        type: 'link',
        text: 'demo',
        link: 'https://gingerbarber.pl/'
      }]
    },
    {
      title: 'Monitor parkingu [Hackaton]',
      id: 'hackaton',
      bg: 'hackaton.png',
      bg2: 'hackaton2.png',
      screens: 'hackaton_screens.png',
      desc: "<p>Aplikacja napisana podczas tarnowskiego Hackatonu <a class='link' href='http://www.economicaccelerator.pl/hackathon/'>&#8249;Zaprogramuj_Tarnów&#8250;</a> w przeciągu 36 godzin.</p> <p>Głównym założeniem aplikacji jest <strong>zbieranie danych o stanie parkingów miejskich</strong> w Tarnowie. Na bazie obrazów z kamer miejskich aplikacja proponuje użytkownikowi wolne miejsca parkingowe oraz umożliwia zakup biletów przez <strong>system MoBilet</strong>.</p><p>Aplikacja została napisna jako PWA w Angular 7, komunikując się z API stworzonym w .NET Core.</p><hr/><p>W tworzeniu aplikacji udził wzięli:</p> <ul><li><a class='link link-gh' href='https://github.com/jakubfaliszewski'><strong>Jakub Faliszewski</strong> - front-end i grafika</a></li><li><a class='link  link-gh' href='https://github.com/dawidmalec7'><strong>Dawid Malec</strong> - front-end</a></li><li><a class='link link-gh' href='https://github.com/dominikkoziol'><strong>Dominik Kozioł</strong> - back-end</a></li><li><a class='link link-gh' href='https://github.com/ksmolenwsei'><strong>Krystian Smoleń</strong> - back-end</a></li>",
      buttons: [{
        type: 'link',
        text: 'kod',
        link: 'https://github.com/jakubfaliszewski/hackatonTarnow'
      },
      {
        type: 'link',
        text: 'prezentacja',
        link: 'https://docs.google.com/presentation/d/1oj5jTX_DgfoJ8CNUK2RoD_-wm7wbFm9SeEejzj3iAV0/edit?usp=sharing'
      }]
    },
    {
      title: 'Gradient Tool',
      id: 'gradienttool',
      bg: 'gradient.png',
      bg2: 'gradient2.png',
      screens: 'gradient_screens.png',
      desc: '<p>Prosta w założeniach aplikacja stworzona do <strong>generowania gradientów w CSS</strong>. Pozwala na dodanie dowolnej ilości kolorów do gradientu, zmienianie ich kolejności oraz kierunku wyświetlania stworzonego w ten sposób tła. Na podstawie wyborów użytkownika <strong>generuje gotowy kod</strong>. Napędzane Angularem.</p>',
      buttons: [{
        type: 'link',
        text: 'demo',
        link: 'https://jakubfaliszewski.github.io/gradient-tool/'
      },
      {
        type: 'link',
        text: 'kod',
        link: 'https://github.com/jakubfaliszewski/gradient-tool'
      }]
    }, 
    {
      title: 'Win98CSS', 
      id: 'win98css',
      bg: 'win98.png',
      bg2: 'win982.png',
      screens: 'win98_screens.png',
      desc: '<p>Mikro-biblioteczka CSS. Zawiera zestaw gotowych komponentów, wzorowanych na stylu <strong>kultowego Windowsa 98</strong></p>',
      buttons: [{
        type: 'link',
        text: 'demo',
        link: 'https://jakubfaliszewski.github.io/win98CSS/public/'
      },
      {
        type: 'link',
        text: 'kod',
        link: 'https://github.com/jakubfaliszewski/win98CSS'
      }]
    },
    {
      title: 'Dark Souls Soundboard',
      id: 'dss',
      bg: 'dss.png',
      bg2: 'dss2.png',
      screens: 'dss.png',
      desc: "<p>Aplikacja napisana dla treningu - z początku przy pomocy framework'a <strong>Ionic</strong>, potem przepisana w publicznym repozytorium na Github, tym razem na bazie <strong>NativeScript i Angulara</strong>.</p><p>Obecnie, jako darmowa aplikacja na Google Play <strong>posiada ponad 50 tysięcy pobrań</strong> i średnią ocenę 4.6.</p>",
      buttons: [{
        type: 'link',
        text: 'demo',
        link: 'https://github.com/jakubfaliszewski/DarkSoulsSoundboard-NS'
      },
      {
        type: 'gplay',
        link: 'https://play.google.com/store/apps/details?id=soundboard_darksouls.alcam.com.pl'
      }]
    },
    {
      title: 'Spotify Stats',
      id: 'spotify',
      bg: 'spotify.png',
      bg2: 'spotify2.png',
      screens: 'spotify_screens.png',
      desc: "<p>Korzystając z API Spotify, razem z <a class='link-gh' href='https://github.com/dominikkoziol'><strong>Dominikiem Koziołem</strong></a> - odpowiedzialnym na NodeJS'owy back-end - stworzyliśmy aplikację zbierającą <strong>dane użytkownika Spotify</strong>. Na podstawie danych z API użytkownik może dowiedzieć się, jakich <strong>albumów słucha najczęściej</strong>, czym charakteryzuje się słuchana przez niego muzyka i jakich gatunków słucha. Front-end napisany z użyciem <strong>AngularJS</strong>.</p>",
      buttons: [{
        type: 'link',
        text: 'kod',
        link: 'https://github.com/Gooro/SpotifyApiStats'
      }
      ]
    }
  ]

}
