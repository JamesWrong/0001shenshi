document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button[data-target]');
    const contentFrame = document.getElementById('content-frame');

    const urls = {
        douyu: 'https://www.douyu.com/topic/mssjdxzz?rid=45662',
        bilibili: 'https://space.bilibili.com/3546673429088810?spm_id_from=333.337.0.0'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            contentFrame.src = urls[target];
        });
    });

    // 默认加载斗鱼直播
    contentFrame.src = urls.douyu;
});