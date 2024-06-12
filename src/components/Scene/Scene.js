import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import rocketModel from '../../images/raketa.gltf'; // Імпорт файлу моделі

const Rocket = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Сцена
        const scene = new THREE.Scene();

        // Камера
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Рендерер
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Додавання світла
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        // Завантаження моделі ракети
        const loader = new GLTFLoader();
        loader.load(rocketModel, (gltf) => {
            const rocket = gltf.scene;
            rocket.scale.set(1, 1, 0.5); // Масштабування моделі
            scene.add(rocket);

            // Анімація
            const animate = () => {
                requestAnimationFrame(animate);

                rocket.rotation.x += 0.01;
                rocket.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();
        }, undefined, (error) => {
            console.error('An error happened while loading the model', error);
        });

        // Очистка ресурсу при демонтажі компонента
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
};

export default Rocket;
