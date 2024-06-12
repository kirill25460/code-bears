import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CatmullRomCurve3 } from 'three';
import rocketModel from '../../images/raketa.gltf'; // Імпорт файлу моделі

const Rocket = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Сцена
        const scene = new THREE.Scene();

        // Камера
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 2, 5);

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
            rocket.scale.set(0.2, 0.2, 0.2); // Масштабування моделі
            scene.add(rocket);
            const curve = new CatmullRomCurve3([
                new THREE.Vector3(0, -window.innerHeight / 2, 0),
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(0, window.innerHeight / 2, 0),
                new THREE.Vector3(0, window.innerHeight, 0),
                new THREE.Vector3(0, window.innerHeight * 1.5, 0),
                new THREE.Vector3(0, window.innerHeight * 2, 0),
            ]);

            // Анімація ракети вздовж кривої
            const animate = () => {
                requestAnimationFrame(animate);

                // Обчислення позиції ракети залежно від скролінгу сторінки
                const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                const point = curve.getPointAt(scrollPosition);
                const tangent = curve.getTangentAt(scrollPosition);

                rocket.position.copy(point);
                rocket.lookAt(point.add(tangent));

                renderer.render(scene, camera);
            };

            animate();
        }, undefined, (error) => {
            console.error('An error happened while loading the model', error);
        });

        // Обробка зміни розміру вікна
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Очистка ресурсу при демонтажі компонента
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);
    return <div ref={mountRef}></div>;
};

export default Rocket;
