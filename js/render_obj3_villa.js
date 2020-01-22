var render_obj3_villa = (function() {
    
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }

    var objPath = 'models/cubo/';
    var objName = 'statuaCubo_lp';
    var conainerId = 'render_obj3_villa';

    var container;

    var camera, controls, scene, renderer;
    var lighting, ambient, keyLight, fillLight, backLight;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var animFrame;

	var altezzaPixel=1;
	var tempObject;
	var contaZoom=0;
	var part=-1.1;
	var varScale=1;
	var outputA=0;
	var objRealSizecm=14;
	
    function init_render() {

        container = document.createElement('div');
        var d = document.getElementById(conainerId);
        d.appendChild(container);
        
        /* Camera */
        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z =10;
		camera.position.y=0;
		camera.position.x=0;
			

        /* Scene */
        scene = new THREE.Scene();
        lighting = false;

        ambient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambient);


        keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        /* Model */
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setBaseUrl(objPath);
        mtlLoader.setPath(objPath);
        mtlLoader.load(objName+'.mtl', function (materials) {

            materials.preload();

            /* VARIABLE */
            //materials.materials.obj_1.map.magFilter = THREE.NearestFilter;
            //materials.materials.obj_1.map.minFilter = THREE.LinearFilter;

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.setPath(objPath);
            objLoader.load(objName+'.obj', function (object) {
                scene.add(object);
				tempObject=object;
					tempObject.scale.set(varScale,varScale,varScale);
					scene.add(tempObject);
					var box2 = new THREE.Box3().setFromObject( tempObject );
					altezzaPixel=box2.max.y-box2.min.y;
					altezzaPixel=(altezzaPixel*window.innerHeight)/7.4;
					
					/*var dotGeometry = new THREE.Geometry();
					dotGeometry.vertices.push(new THREE.Vector3( box2.min.x, box2.min.y, box2.min.z));
					var dotMaterial = new THREE.PointsMaterial( { size: 5, sizeAttenuation: false } );
					var dot = new THREE.Points( dotGeometry, dotMaterial );
					scene.add( dot );
					var dotGeometry2 = new THREE.Geometry();
					dotGeometry2.vertices.push(new THREE.Vector3( box2.min.x, box2.max.y, box2.min.z));
					var dotMaterial2 = new THREE.PointsMaterial( { size: 5, sizeAttenuation: false } );
					var dot2 = new THREE.Points( dotGeometry2, dotMaterial2 );
					scene.add( dot2 );*/
            });

        });


        /* Renderer */
        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));

        container.appendChild(renderer.domElement);

        /* Controls */
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        

        /* Events */
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('keydown', onKeyboardEvent, false);

    }

  

    function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function onKeyboardEvent(e) {

        if (e.code === 'KeyL') {

            lighting = !lighting;

            if (lighting) {

                ambient.intensity = 0.25;
                scene.add(keyLight);
                scene.add(fillLight);
                scene.add(backLight);

            } else {

                ambient.intensity = 1.0;
                scene.remove(keyLight);
                scene.remove(fillLight);
                scene.remove(backLight);

            }

        }

    }

    function animate() {

        animFrame = requestAnimationFrame(animate);

        controls.update();

        render();

    }

    function render() {

        renderer.render(scene, camera);

		var t=controls.getContaZoom();
			part=0;
			if (contaZoom == t) {
				print="ok";
			} else {
				var i=controls.getContaInOut();
				part=altezzaPixel;
				while (i!=0){
					if(i>0){ 
						i=i-1; 
						part=part+(part*5)/100;
					}else{
						i=i+1;
						part=part-(part*5)/100;
					}
				}
				outputA=part;
				contaZoom=t;
			}
            if (t==0) outputA=altezzaPixel;
            var dpiCont=document.getElementById("dpi");
            if(dpiCont){
                var dpi=dpiCont.offsetHeight;
                var prtOut = outputA*(2.54/dpi);
                prtOut = prtOut.toFixed(2);
                document.getElementById("myText").innerHTML = prtOut +' cm';//a*0.02871;
                document.getElementById("myText2").innerHTML = objRealSizecm +' cm';//a*0.02871;
                //var slider = document.getElementById("myRange");
                //slider.value=prtOut*5000/objRealSizecm;
                //document.getElementById("g1").value=prtOut*200/objRealSizecm;
                valGage1=prtOut*100/objRealSizecm;
            }
	}

    function stop(){
		controls.reset();
        cancelAnimationFrame(animFrame);
    }

    function init() {
        init_render();
        //animate();        
    }

    return {
        init: init,
        animate: animate,
        stop: stop
    }

})();