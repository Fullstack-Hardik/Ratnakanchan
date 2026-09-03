'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFAFAFA, 0.001); // Match background color for smooth fade

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles (Gold dust effect)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    
    const posArray = new Float32Array(particleCount * 3);
    for(let i = 0; i < particleCount * 3; i++) {
        // Spread particles around
        posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xD4AF37, // Gold color
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // Geometric element (Abstract Jewelry Shape - Icosahedron wireframe)
    const geometry = new THREE.IcosahedronGeometry(4, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xD4AF37, 
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const shape = new THREE.Mesh(geometry, material);
    shape.position.set(5, 0, -5); // Position it to the right
    scene.add(shape);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        shape.rotation.y += 0.002;
        shape.rotation.x += 0.001;
        
        // Gentle float effect
        shape.position.y = Math.sin(elapsedTime * 0.5) * 0.5;

        // Subtle mouse parallax
        camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const currentMount = mountRef.current;

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', onDocumentMouseMove);
        if (currentMount) {
            currentMount.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />;
}
