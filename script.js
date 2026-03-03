function speak(text) {
    // إيقاف أي صوت يعمل حالياً لتجنب تداخل الأصوات
    window.speechSynthesis.cancel();
    
    // إنشاء أمر النطق للنص الممرر
    const utterance = new SpeechSynthesisUtterance(text);
    
    // ضبط اللغة إلى العربية (السعودية كمثال للنطق الواضح)
    utterance.lang = 'ar-SA'; 
    
    // ضبط سرعة النطق (0.9 تجعل الصوت هادئاً وواضحاً)
    utterance.rate = 0.9; 
    
    // ضبط حدة الصوت (1 هو المستوى الطبيعي)
    utterance.pitch = 1;      
    
    // تشغيل النطق
    window.speechSynthesis.speak(utterance);
}
