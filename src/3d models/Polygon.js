import React, { useEffect } from 'react';
import Zdog from 'zdog';

const TAU = Zdog.TAU;
const ROOT3 = Math.sqrt(3);
const ROOT5 = Math.sqrt(5);
const PHI = (1 + ROOT5) / 2;

const Polygon = (props) => {
  const colors = props.colors;
  const selector = props.illoSelector;
  const polygonType = props.polygonType;

  useEffect(() => {
    switch (polygonType) {
      case 'dodecahedron':
        dodecahedron(colors, selector);
        break;
      case 'octahedron':
        octahedron(colors, selector);
        break;
      case 'tetrahedron':
        tetrahedron(colors, selector);
        break;
      case 'icosahedron':
        icosahedron(colors, selector);
        break;
      default:
        icosahedron(colors, selector);
    }
  }, [colors, selector, polygonType]);

  return <canvas width="200" height="200" className={selector}></canvas>;
};

const octahedron = (colors, selector, scalePercentage) => {
  let illustration = new Zdog.Illustration({
    element: `.${selector}`,
  });

  let octahedron = new Zdog.Anchor({
    addTo: illustration,
    translate: { x: -4, y: 4 },
    scale: 90,
  });
  let colorWheel = colors;

  // radius of triangle with side length = 1
  let radius = ((ROOT3 / 2) * 2) / 3;
  let height = (radius * 3) / 2;
  let tilt = Math.asin(0.5 / height);

  [-1, 1].forEach(function (ySide) {
    for (let i = 0; i < 4; i++) {
      let rotor = new Zdog.Anchor({
        addTo: octahedron,
        rotate: { y: (TAU / 4) * (i + 1.5) * -1 },
      });

      let anchor = new Zdog.Anchor({
        addTo: rotor,
        translate: { z: 0.5 },
        rotate: { x: tilt * ySide },
        // scale: { y: -ySide },
      });

      new Zdog.Polygon({
        sides: 3,
        radius: radius,
        addTo: anchor,
        translate: { y: (-radius / 2) * ySide },
        scale: { y: ySide },
        stroke: false,
        fill: true,
        color: colorWheel[i + 0.5 + 0.5 * ySide],
        backface: true,
      });
    }
  });

  function animate() {
    // rotate illo each frame
    illustration.rotate.x -= 0.01;
    illustration.rotate.y += 0.01;
    illustration.rotate.z += 0.01;
    illustration.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
  }
  // start animation
  animate();
  illustration.updateRenderGraph();
};

const dodecahedron = (colors, selector) => {
  let illustration = new Zdog.Illustration({
    element: `.${selector}`,
  });
  let dodecahedron = new Zdog.Anchor({
    addTo: illustration,
    translate: { x: 0, y: 4 },
    scale: 35,
  });

  // https://en.wikipedia.org/wiki/Regular_dodecahedron#Dimensions
  let midradius = (PHI * PHI) / 2;

  // top & bottom faces
  let face = new Zdog.Polygon({
    sides: 5,
    radius: 1,
    addTo: dodecahedron,
    translate: { y: -midradius },
    rotate: { x: TAU / 4 },
    fill: true,
    stroke: false,
    color: colors[1],
    // backface: false,
  });

  face.copy({
    translate: { y: midradius },
    rotate: { x: -TAU / 4 },
    color: colors[3],
  });

  [-1, 1].forEach(function (ySide) {
    let colorWheel = {
      '-1': colors,
      1: colors,
    }[ySide];

    for (let i = 0; i < 5; i++) {
      let rotor1 = new Zdog.Anchor({
        addTo: dodecahedron,
        rotate: { y: (TAU / 5) * i },
      });
      let rotor2 = new Zdog.Anchor({
        addTo: rotor1,
        rotate: { x: (TAU / 4) * ySide - Math.atan(2) },
      });

      face.copy({
        addTo: rotor2,
        translate: { z: midradius },
        rotate: { z: TAU / 2 },
        color: colorWheel[i],
      });
    }
  });

  function animate() {
    // rotate illo each frame
    illustration.rotate.x += 0.01;
    illustration.rotate.z += 0.01;
    illustration.rotate.y += 0.01;
    illustration.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
  }
  // start animation
  animate();
  illustration.updateRenderGraph();
};

const tetrahedron = (colors, selector) => {
  let illustration = new Zdog.Illustration({
    element: `.${selector}`,
  });

  let tetrahedron = new Zdog.Anchor({
    addTo: illustration,
    translate: { x: 0, y: 0 },
    scale: 130,
  });

  let radius = 0.5;
  let inradius = Math.cos(TAU / 6) * radius;
  let height = radius + inradius;

  let triangle = new Zdog.Polygon({
    sides: 3,
    radius: radius,
    addTo: tetrahedron,
    translate: { y: height / 2 },
    fill: true,
    stroke: false,
    color: colors[1],
    // backface: false,
  });

  for (let i = 0; i < 3; i++) {
    let rotor1 = new Zdog.Anchor({
      addTo: tetrahedron,
      rotate: { y: (TAU / 3) * -i },
    });
    let rotor2 = new Zdog.Anchor({
      addTo: rotor1,
      translate: { z: inradius, y: height / 2 },
      rotate: { x: Math.acos(1 / 3) * -1 + TAU / 4 },
    });
    triangle.copy({
      addTo: rotor2,
      translate: { y: -inradius },
      color: colors[i],
    });
  }

  triangle.rotate.set({ x: -TAU / 4, z: -TAU / 2 });

  function animate() {
    // rotate illo each frame
    illustration.rotate.x += 0.01;
    illustration.rotate.y += 0.01;
    illustration.rotate.z -= 0.01;
    illustration.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
  }
  // start animation
  animate();
  illustration.updateRenderGraph();
};

const icosahedron = (colors, selector) => {
  let illustration = new Zdog.Illustration({
    element: `.${selector}`,
  });

  let isocahedron = new Zdog.Anchor({
    addTo: illustration,
    translate: { x: 4, y: 4 },
    scale: 60,
  });

  // geometry
  // radius of triangle with side length = 1
  let faceRadius = ((ROOT3 / 2) * 2) / 3;
  let faceHeight = (faceRadius * 3) / 2;
  let capApothem = 0.5 / Math.tan(TAU / 10);
  let capRadius = 0.5 / Math.sin(TAU / 10);
  let capTilt = Math.asin(capApothem / faceHeight);
  let capSagitta = capRadius - capApothem;
  let sideTilt = Math.asin(capSagitta / faceHeight);
  let sideHeight = Math.sqrt(faceHeight * faceHeight - capSagitta * capSagitta);

  // let colorWheel = [ eggplant, garnet, orange, gold, yellow ];

  [-1, 1].forEach(function (ySide) {
    let capColors = {
      '-1': ['#e8daa5', '#ede3ba', '#d2ba55', '#e2d291', '#d8c269', '#cdb140'],
      1: ['#e8daa5', '#ede3ba', '#d2ba55', '#e2d291', '#d8c269', '#cdb140'],
    }[ySide];

    let sideColors = {
      '-1': colors,
      1: colors,
    }[ySide];

    for (let i = 0; i < 5; i++) {
      let rotor = new Zdog.Anchor({
        addTo: isocahedron,
        rotate: { y: (TAU / 5) * -i },
        translate: { y: (sideHeight / 2) * ySide },
      });

      let capRotateX = -capTilt;
      let isYPos = ySide > 0;
      capRotateX += isYPos ? TAU / 2 : 0;

      let capAnchor = new Zdog.Anchor({
        addTo: rotor,
        translate: { z: capApothem * ySide },
        rotate: { x: capRotateX },
      });

      // cap face
      let face = new Zdog.Polygon({
        sides: 3,
        radius: faceRadius,
        addTo: capAnchor,
        translate: { y: -faceRadius / 2 },
        stroke: false,
        fill: true,
        color: capColors[i],
        // backface: false,
      });

      let sideRotateX = -sideTilt;
      sideRotateX += isYPos ? 0 : TAU / 2;
      let sideAnchor = capAnchor.copy({
        rotate: { x: sideRotateX },
      });

      face.copy({
        addTo: sideAnchor,
        translate: { y: -faceRadius / 2 },
        rotate: { y: TAU / 2 },
        color: sideColors[i],
      });
    }
  });
  function animate() {
    // rotate illo each frame
    illustration.rotate.x += 0.01;
    illustration.rotate.y -= 0.01;
    illustration.rotate.z += 0.01;
    illustration.updateRenderGraph();
    // animate next frame
    requestAnimationFrame(animate);
  }
  // start animation
  animate();
  illustration.updateRenderGraph();
};

export default Polygon;
