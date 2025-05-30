import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const BoxingAvatar = (props) => {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/human/boxing.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Play the first animation by default
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().fadeIn(0.5).play();
      return () => actions[animations[0].name]?.fadeOut(0.5);
    }
  }, [actions, animations]);

  return <primitive ref={group} object={scene} {...props} />;
};

export default BoxingAvatar; 