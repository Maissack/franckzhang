function downloadPDF() {
    
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1ntdhvQQGTcXfprVB9WpcktZDwYAxJAVt'; 
    link.download = 'CV - Franck ZHANG.pdf'; 

    
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
