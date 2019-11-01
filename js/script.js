AFRAME.registerComponent('my-event', {
    init: function () {
      let description = document.querySelector('#planeDescription');
      let descArea    = document.createElement('a-entity');
      let descBanda   = document.createElement('a-text');
      let descAlbum   = document.createElement('a-text');
      //let descCapa    = document.createElement('img');
      

      let banda = 'Foo Fighters';
      let album = 'Color and Shape';

      // Drawing the description pane
      descBanda.setAttribute('value', `Banda: ${banda}`);
      descBanda.setAttribute('position', '0 .4 0');
      descBanda.setAttribute('class', 'descText');
      descBanda.setAttribute('text', 'width: 1');
      descAlbum.setAttribute('value', `Álbum: ${album}`);
      descAlbum.setAttribute('class', 'descText');
      descAlbum.setAttribute('position', '0 .3 0');
      descAlbum.setAttribute('text', 'width: 1');
      
      descArea.setAttribute('id', 'descArea');
      descArea.setAttribute('text', 'width: 1');
      descArea.setAttribute('position', '-.4 0 0');
      descArea.appendChild(descBanda);
      descArea.appendChild(descAlbum);

      // Writing musics
      let descMusicas = document.createElement('a-text');
      descMusicas.setAttribute('value', 'Músicas:');
      descMusicas.setAttribute('class', 'descText');
      descMusicas.setAttribute('position', '0 .1 0');
      descMusicas.setAttribute('text', 'width: 1');
      descArea.appendChild(descMusicas);
      let music;
      for(let i=0; i < 8; i++){
        music = document.createElement('a-text');
        music.setAttribute('value', `Música #${i}`);
        music.setAttribute('position', `0 ${- i * .050} 0`);
        music.setAttribute('class', 'descText');
        music.setAttribute('text', 'width: 1');
        descArea.appendChild(music);
      }


      // Class descText
      //let classDescText = document.querySelector('.descText');
      //classDescText.setAttribute('text', 'width: 2');

      description.setAttribute('rotation', '-90 0 0');
      description.setAttribute('size', '1 2 1');
      description.setAttribute('position', '0 .5 0');
      description.setAttribute('material', 'color: orange');
      description.appendChild(descArea);
      
    },

});
