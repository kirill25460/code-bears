import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from '../../images/raketa.gltf'; // Импорт файла модели

const Rocket = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Сцена
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    // Камера
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    // Рендерер
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Добавление света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Загрузка модели ракеты
    const loader = new GLTFLoader();
    loader.load(
      rocketModel,
      gltf => {
        const rocket = gltf.scene;
        rocket.scale.set(0.2, 0.2, 0.2); // Масштабирование модели
        scene.add(rocket);

        const animate = () => {
          requestAnimationFrame(animate);

          rocket.rotation.x += 0.01;
          rocket.rotation.y += 0.01;

          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      error => {
        console.error('An error happened while loading the model', error);
      }
    );

    // Обработка изменения размера окна
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Очистка ресурса при демонтаже компонента
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Rocket;
