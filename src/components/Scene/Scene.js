import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CatmullRomCurve3 } from 'three';
import rocketModel from '../../images/raketa.gltf';

const Rocket = () => {
  const mountRef = useRef(null);
  const rocketRef = useRef(null);
  const curveRef = useRef(null);
  const [visible, setVisible] = useState(window.innerWidth >= 1240);
  const [initialized, setInitialized] = useState(false); 

  useEffect(() => {
    let scene, camera, renderer, light, loader;

    const init = () => {
      if (initialized) return;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 10);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(1, 1, 1).normalize();
      scene.add(light);

      loader = new GLTFLoader();
      loader.load(rocketModel, onLoad, undefined, onError);
      setInitialized(true); 
    };

    const onLoad = (gltf) => {
      const rocket = gltf.scene;
      rocket.scale.set(0.5, 0.5, 0.5);
      scene.add(rocket);
      rocketRef.current = rocket;

      const curve = new CatmullRomCurve3([
        new THREE.Vector3(-5, 10, -5),
        new THREE.Vector3(-5, 4, -5),
        new THREE.Vector3(-10, -6, -10),
        new THREE.Vector3(-12, -3, 0),
        new THREE.Vector3(-10, -2, 0),
        new THREE.Vector3(-10, -8, -10),
        new THREE.Vector3(-5, -9, -5),
        new THREE.Vector3(-4, -4, -5),
        new THREE.Vector3(-4, -3.5, -5),
        new THREE.Vector3(-4, -3, -5),
      ]);

      curveRef.current = curve;
      animate();
    };

    const onError = (error) => {
      console.error('An error happened while loading the model', error);
    };

    const animate = () => {
      if (!visible) return;

      requestAnimationFrame(animate);
      updateRocketPosition();
      renderer.render(scene, camera);
    };

    const updateRocketPosition = () => {
      if (rocketRef.current && curveRef.current && mountRef.current) {
        const scrollPosition = (window.pageYOffset - mountRef.current.offsetTop) / (document.documentElement.scrollHeight - window.innerHeight);
        const point = curveRef.current.getPointAt(scrollPosition);
        const tangent = curveRef.current.getTangentAt(scrollPosition).normalize();

        rocketRef.current.position.copy(point);

        const direction = new THREE.Vector3(0, -5, 0).normalize();
        rocketRef.current.lookAt(point.clone().add(direction));

        rocketRef.current.rotation.setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent));
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 1240) {
        setVisible(false);
        if (renderer && mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
          renderer.dispose();
        }
      } else {
        if (!visible) {
          setVisible(true);
          init();
        }
        if (camera) {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
        }
        if (renderer) {
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
      } 
    };
    

    if (visible) init();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', updateRocketPosition);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', updateRocketPosition);
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      setInitialized(false); 
    };
  }, [visible]);

  return visible ? <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}></div> : null;
};

export default Rocket;
