window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 安卓软件端加载动画脚本
(function() {
    // 创建加载容器
    function createLoadingContainer() {
        const container = document.createElement('div');
        container.id = 'android-loading-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        `;
        return container;
    }

    // 创建加载动画
    function createLoadingSpinner() {
        const spinner = document.createElement('div');
        spinner.id = 'android-loading-spinner';
        spinner.style.cssText = `
            width: 80px;
            height: 80px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite, pulse 2s ease-in-out infinite;
            margin-bottom: 30px;
            box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
        `;
        return spinner;
    }

    // 创建加载文本
    function createLoadingText() {
        const text = document.createElement('div');
        text.id = 'android-loading-text';
        text.style.cssText = `
            font-size: 20px;
            color: #333;
            margin-bottom: 20px;
            font-weight: 500;
            animation: fadeIn 1s ease-in-out;
        `;
        text.textContent = '系统加载中...';
        return text;
    }

    // 创建文件加载模拟
    function createFileLoading() {
        const fileLoading = document.createElement('div');
        fileLoading.id = 'android-file-loading';
        fileLoading.style.cssText = `
            width: 200px;
            height: 120px;
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            overflow-y: auto;
            font-size: 12px;
            color: #666;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        `;
        return fileLoading;
    }

    // 创建安卓提示
    function createAndroidHint() {
        const hint = document.createElement('div');
        hint.id = 'android-hint';
        hint.style.cssText = `
            font-size: 14px;
            color: #28a745;
            font-weight: 500;
        `;
        hint.textContent = '当前“安卓软件端”';
        return hint;
    }

    // 创建加载进度条
    function createProgressBar() {
        const progressContainer = document.createElement('div');
        progressContainer.id = 'android-loading-progress';
        progressContainer.style.cssText = `
            width: 250px;
            height: 8px;
            background-color: #f0f0f0;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        `;

        const progressBar = document.createElement('div');
        progressBar.id = 'android-loading-progress-bar';
        progressBar.style.cssText = `
            width: 0%;
            height: 100%;
            background-color: #3498db;
            border-radius: 4px;
            animation: progress 3s ease-in-out forwards;
            background-image: linear-gradient(90deg, #3498db, #2ecc71);
        `;

        progressContainer.appendChild(progressBar);
        return progressContainer;
    }

    // 添加动画样式
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 20px rgba(52, 152, 219, 0.3); }
                50% { box-shadow: 0 0 40px rgba(52, 152, 219, 0.6); }
                100% { box-shadow: 0 0 20px rgba(52, 152, 219, 0.3); }
            }
            @keyframes fadeIn {
                0% { opacity: 0; transform: translateY(-10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes progress {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        `;
        document.head.appendChild(style);
    }

    // 创建可拖动的跳转按钮
    function createDraggableButton() {
        const button = document.createElement('div');
        button.id = 'android-home-button';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #3498db;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: move;
            z-index: 9998;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            font-size: 12px;
            text-align: center;
            padding: 10px;
            box-sizing: border-box;
            transition: background-color 0.3s;
        `;
        button.textContent = '首页';
        button.title = '点击跳转到首页';

        // 添加点击跳转功能
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'https://wg5p835kmb.coze.site/store';
        });

        // 添加拖动功能
        let isDragging = false;
        let offsetX, offsetY;

        button.addEventListener('mousedown', function(e) {
            isDragging = true;
            offsetX = e.clientX - button.getBoundingClientRect().left;
            offsetY = e.clientY - button.getBoundingClientRect().top;
            button.style.zIndex = '9999';
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;
                button.style.left = x + 'px';
                button.style.top = y + 'px';
                button.style.bottom = 'auto';
                button.style.right = 'auto';
            }
        });

        document.addEventListener('mouseup', function() {
            if (isDragging) {
                isDragging = false;
                button.style.zIndex = '9998';
            }
        });

        // 触摸设备支持
        button.addEventListener('touchstart', function(e) {
            isDragging = true;
            const touch = e.touches[0];
            offsetX = touch.clientX - button.getBoundingClientRect().left;
            offsetY = touch.clientY - button.getBoundingClientRect().top;
            button.style.zIndex = '9999';
            e.preventDefault();
        });

        document.addEventListener('touchmove', function(e) {
            if (isDragging) {
                const touch = e.touches[0];
                const x = touch.clientX - offsetX;
                const y = touch.clientY - offsetY;
                button.style.left = x + 'px';
                button.style.top = y + 'px';
                button.style.bottom = 'auto';
                button.style.right = 'auto';
                e.preventDefault();
            }
        });

        document.addEventListener('touchend', function() {
            if (isDragging) {
                isDragging = false;
                button.style.zIndex = '9998';
            }
        });

        return button;
    }

    // 模拟文件加载
    function simulateFileLoading(fileLoadingElement) {
        const files = [
            'config.json',
            'userdata.dat',
            'appsettings.xml',
            'resources/assets.bin',
            'database/local.db',
            'cache/temp.tmp'
        ];

        let index = 0;
        const interval = setInterval(() => {
            if (index < files.length) {
                const fileItem = document.createElement('div');
                fileItem.style.cssText = `
                    margin-bottom: 5px;
                    display: flex;
                    align-items: center;
                `;
                fileItem.innerHTML = `<span style="color: #3498db;">✓</span> <span style="margin-left: 8px;">${files[index]}</span>`;
                fileLoadingElement.appendChild(fileItem);
                index++;
            } else {
                clearInterval(interval);
                // 加载完成后移除加载界面并添加跳转按钮
                setTimeout(() => {
                    const container = document.getElementById('android-loading-container');
                    if (container) {
                        container.style.opacity = '0';
                        container.style.transition = 'opacity 0.5s ease';
                        setTimeout(() => {
                            container.remove();
                            // 添加可拖动的跳转按钮
                            const button = createDraggableButton();
                            document.body.appendChild(button);
                        }, 500);
                    }
                }, 1000);
            }
        }, 500);
    }

    // 初始化加载界面
    function initLoading() {
        // 检查是否已存在加载界面
        if (document.getElementById('android-loading-container')) {
            return;
        }

        // 添加动画样式
        addAnimationStyles();

        // 创建加载容器
        const container = createLoadingContainer();

        // 创建并添加加载动画
        const spinner = createLoadingSpinner();
        container.appendChild(spinner);

        // 创建并添加加载文本
        const text = createLoadingText();
        container.appendChild(text);

        // 创建并添加加载进度条
        const progressBar = createProgressBar();
        container.appendChild(progressBar);

        // 创建并添加文件加载模拟
        const fileLoading = createFileLoading();
        container.appendChild(fileLoading);

        // 创建并添加安卓提示
        const hint = createAndroidHint();
        container.appendChild(hint);

        // 添加到文档
        document.body.appendChild(container);

        // 开始模拟文件加载
        simulateFileLoading(fileLoading);
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLoading);
    } else {
        initLoading();
    }
})();