import React, { useState, useRef, useEffect } from 'react';
import { Upload, Download, Palette, Type, Grid, Move, X } from 'lucide-react';

const BrandazineStylingGenerator = () => {
  const [products, setProducts] = useState([]);
  const [layoutCount, setLayoutCount] = useState(10);
  const [bgColor, setBgColor] = useState('#9CA798');
  const [subtitle, setSubtitle] = useState('PICK UP ITEM 2025 AW');
  const [draggedProductIndex, setDraggedProductIndex] = useState(null);
  const [productPositions, setProductPositions] = useState({});
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const layouts = {
    5: [
      { x: 0.08, y: 0.15, w: 0.15, h: 0.15 },
      { x: 0.08, y: 0.35, w: 0.15, h: 0.15 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.77, y: 0.15, w: 0.15, h: 0.15 },
      { x: 0.77, y: 0.35, w: 0.15, h: 0.15 }
    ],
    6: [
      { x: 0.08, y: 0.15, w: 0.15, h: 0.15 },
      { x: 0.08, y: 0.35, w: 0.15, h: 0.15 },
      { x: 0.08, y: 0.55, w: 0.15, h: 0.15 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.77, y: 0.15, w: 0.15, h: 0.15 },
      { x: 0.77, y: 0.35, w: 0.15, h: 0.15 }
    ],
    7: [
      { x: 0.08, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.32, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.49, w: 0.12, h: 0.12 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.77, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.32, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.49, w: 0.12, h: 0.12 }
    ],
    8: [
      { x: 0.08, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.3, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.45, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.6, w: 0.12, h: 0.12 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.77, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.3, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.45, w: 0.12, h: 0.12 }
    ],
    9: [
      { x: 0.08, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.3, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.45, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.6, w: 0.12, h: 0.12 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.77, y: 0.15, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.3, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.45, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.6, w: 0.12, h: 0.12 }
    ],
    10: [
      { x: 0.08, y: 0.12, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.27, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.42, w: 0.12, h: 0.12 },
      { x: 0.08, y: 0.57, w: 0.12, h: 0.12 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.48 },
      { x: 0.4, y: 0.7, w: 0.2, h: 0.08 },
      { x: 0.77, y: 0.12, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.27, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.42, w: 0.12, h: 0.12 },
      { x: 0.77, y: 0.57, w: 0.12, h: 0.12 }
    ],
    11: [
      { x: 0.05, y: 0.12, w: 0.11, h: 0.11 },
      { x: 0.05, y: 0.26, w: 0.11, h: 0.11 },
      { x: 0.05, y: 0.4, w: 0.11, h: 0.11 },
      { x: 0.05, y: 0.54, w: 0.11, h: 0.11 },
      { x: 0.05, y: 0.68, w: 0.11, h: 0.11 },
      { x: 0.4, y: 0.2, w: 0.2, h: 0.4 },
      { x: 0.84, y: 0.12, w: 0.11, h: 0.11 },
      { x: 0.84, y: 0.26, w: 0.11, h: 0.11 },
      { x: 0.84, y: 0.4, w: 0.11, h: 0.11 },
      { x: 0.84, y: 0.54, w: 0.11, h: 0.11 },
      { x: 0.84, y: 0.68, w: 0.11, h: 0.11 }
    ],
    12: [
      { x: 0.05, y: 0.12, w: 0.1, h: 0.1 },
      { x: 0.05, y: 0.25, w: 0.1, h: 0.1 },
      { x: 0.05, y: 0.38, w: 0.1, h: 0.1 },
      { x: 0.05, y: 0.51, w: 0.1, h: 0.1 },
      { x: 0.05, y: 0.64, w: 0.1, h: 0.1 },
      { x: 0.3, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.52, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.85, y: 0.12, w: 0.1, h: 0.1 },
      { x: 0.85, y: 0.25, w: 0.1, h: 0.1 },
      { x: 0.85, y: 0.38, w: 0.1, h: 0.1 },
      { x: 0.85, y: 0.51, w: 0.1, h: 0.1 },
      { x: 0.85, y: 0.64, w: 0.1, h: 0.1 }
    ],
    13: [
      { x: 0.05, y: 0.11, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.23, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.35, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.47, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.59, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.71, w: 0.09, h: 0.09 },
      { x: 0.3, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.52, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.86, y: 0.11, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.23, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.35, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.47, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.59, w: 0.09, h: 0.09 }
    ],
    14: [
      { x: 0.05, y: 0.11, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.22, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.33, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.44, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.55, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.66, w: 0.09, h: 0.09 },
      { x: 0.05, y: 0.77, w: 0.09, h: 0.09 },
      { x: 0.3, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.52, y: 0.25, w: 0.18, h: 0.35 },
      { x: 0.86, y: 0.11, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.22, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.33, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.44, w: 0.09, h: 0.09 },
      { x: 0.86, y: 0.55, w: 0.09, h: 0.09 }
    ],
    15: [
      { x: 0.04, y: 0.11, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.21, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.31, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.41, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.51, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.61, w: 0.08, h: 0.08 },
      { x: 0.04, y: 0.71, w: 0.08, h: 0.08 },
      { x: 0.3, y: 0.25, w: 0.17, h: 0.35 },
      { x: 0.51, y: 0.25, w: 0.17, h: 0.35 },
      { x: 0.88, y: 0.11, w: 0.08, h: 0.08 },
      { x: 0.88, y: 0.21, w: 0.08, h: 0.08 },
      { x: 0.88, y: 0.31, w: 0.08, h: 0.08 },
      { x: 0.88, y: 0.41, w: 0.08, h: 0.08 },
      { x: 0.88, y: 0.51, w: 0.08, h: 0.08 },
      { x: 0.88, y: 0.61, w: 0.08, h: 0.08 }
    ]
  };

  const logoWhite = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjIwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5icmFuZGF6aW5lPC90ZXh0Pjwvc3ZnPg==';
  const logoBlack = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjIwMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0MCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9ImJsYWNrIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5icmFuZGF6aW5lPC90ZXh0Pjwvc3ZnPg==';

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newProducts = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const fileName = file.name.replace(/\.(jpg|jpeg|png)$/i, '');
          const parts = fileName.split('-');
          const brand = parts[0] || '';
          const productName = parts.slice(1).join('-') || '';

          newProducts.push({
            id: Date.now() + Math.random(),
            image: img,
            brand: brand.trim(),
            productName: productName.trim()
          });

          if (newProducts.length === files.length) {
            setProducts(prev => [...prev, ...newProducts]);
          }
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleListDragStart = (index) => {
    setDraggedProductIndex(index);
  };

  const handleListDragOver = (e, index) => {
    e.preventDefault();
    if (draggedProductIndex === null || draggedProductIndex === index) return;

    const newProducts = [...products];
    const draggedItem = newProducts[draggedProductIndex];
    newProducts.splice(draggedProductIndex, 1);
    newProducts.splice(index, 0, draggedItem);

    setProducts(newProducts);
    setDraggedProductIndex(index);
  };

  const handleListDragEnd = () => {
    setDraggedProductIndex(null);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const getContrastColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  };

  const handleCanvasMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const layout = layouts[layoutCount];
    if (!layout) return;

    for (let i = 0; i < Math.min(products.length, layoutCount); i++) {
      const pos = productPositions[i] || layout[i];
      const imgX = pos.x * canvas.width;
      const imgY = pos.y * canvas.height;
      const imgW = pos.w * canvas.width;
      const imgH = pos.h * canvas.height;

      if (x >= imgX && x <= imgX + imgW && y >= imgY && y <= imgY + imgH) {
        const offsetX = x - imgX;
        const offsetY = y - imgY;
        
        const handleMove = (moveE) => {
          const newX = (moveE.clientX - rect.left) * scaleX;
          const newY = (moveE.clientY - rect.top) * scaleY;
          
          setProductPositions(prev => ({
            ...prev,
            [i]: {
              x: Math.max(0, Math.min(1 - pos.w, (newX - offsetX) / canvas.width)),
              y: Math.max(0, Math.min(1 - pos.h, (newY - offsetY) / canvas.height)),
              w: pos.w,
              h: pos.h
            }
          }));
        };

        const handleUp = () => {
          document.removeEventListener('mousemove', handleMove);
          document.removeEventListener('mouseup', handleUp);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
        break;
      }
    }
  };

  useEffect(() => {
    drawCanvas();
  }, [products, layoutCount, bgColor, subtitle, productPositions]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 900;
    const height = 1260;

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    const textColor = getContrastColor(bgColor);

    const logo = new Image();
    logo.src = textColor === '#FFFFFF' ? logoWhite : logoBlack;
    logo.onload = () => {
      const logoWidth = 400;
      const logoHeight = 60;
      ctx.drawImage(logo, (width - logoWidth) / 2, 40, logoWidth, logoHeight);
    };

    const layout = layouts[layoutCount];
    if (layout && products.length > 0) {
      products.slice(0, layoutCount).forEach((product, index) => {
        const pos = productPositions[index] || layout[index];
        if (pos) {
          const x = pos.x * width;
          const y = pos.y * height;
          const w = pos.w * width;
          const h = pos.h * height;

          ctx.drawImage(product.image, x, y, w, h);

          ctx.fillStyle = textColor;
          ctx.font = 'bold 20px Arial';
          ctx.fillText(String.fromCharCode(97 + index) + '.', x, y - 10);
        }
      });
    }

    const textStartY = height - 280;
    ctx.fillStyle = textColor;
    ctx.font = 'bold 16px Arial';
    ctx.fillText(subtitle.toUpperCase(), 100, textStartY);

    ctx.font = '15px Arial';
    products.slice(0, layoutCount).forEach((product, index) => {
      const label = String.fromCharCode(97 + index);
      const text = `${label}. ${product.brand.toUpperCase()} ・・・ ${product.productName.toUpperCase()}`;
      ctx.fillText(text, 100, textStartY + 35 + index * 22);
    });
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `brandazine-styling-${Date.now()}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  const resetPositions = () => {
    setProductPositions({});
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Brandazine 스타일링 이미지 생성기</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                상품 이미지 업로드
              </h2>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                이미지 선택 (브랜드-상품명.jpg)
              </button>
              <p className="text-sm text-gray-500 mt-2">
                파일명 형식: 브랜드명-상품명.jpg (예: NIKE-Air Max.jpg)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Grid className="w-5 h-5" />
                레이아웃 선택
              </h2>
              <select
                value={layoutCount}
                onChange={(e) => {
                  setLayoutCount(Number(e.target.value));
                  setProductPositions({});
                }}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(num => (
                  <option key={num} value={num}>{num}개 상품</option>
                ))}
              </select>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Type className="w-5 h-5" />
                부제목 입력
              </h2>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="PICK UP ITEM 2025 AW"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                배경색 선택
              </h2>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Move className="w-5 h-5" />
                상품 순서 조정 (드래그)
              </h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    draggable
                    onDragStart={() => handleListDragStart(index)}
                    onDragOver={(e) => handleListDragOver(e, index)}
                    onDragEnd={handleListDragEnd}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-move hover:bg-gray-100 transition"
                  >
                    <span className="font-bold text-gray-600">{String.fromCharCode(97 + index)}.</span>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{product.brand}</div>
                      <div className="text-xs text-gray-600">{product.productName}</div>
                    </div>
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetPositions}
              className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              배치 위치 초기화
            </button>

            <button
              onClick={downloadImage}
              disabled={products.length === 0}
              className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              이미지 다운로드
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">미리보기 (상품을 드래그해서 위치 조정 가능)</h2>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                onMouseDown={handleCanvasMouseDown}
                className="w-full h-auto cursor-move"
                style={{ maxHeight: '800px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandazineStylingGenerator;