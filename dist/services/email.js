export function initEmailjs() {
    window.onload = function () {
        emailjs.init({
            publicKey: "pPKTo1AjzJniaKu-6",
        });
    };
}
export function setupEmailjsForm() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const formStatus = document.getElementById('form-status');
    if (!contactForm || !submitButton || !formStatus) {
        return;
    }
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = contactForm.elements.namedItem('from_name');
        const emailInput = contactForm.elements.namedItem('from_email');
        const subjectInput = contactForm.elements.namedItem('subject');
        const messageInput = contactForm.elements.namedItem('message_html');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        formStatus.textContent = '';
        const serviceID = "service_ljk5ugl";
        const templateID = "template_zuvv3da";
        const templateParams = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        };
        try {
            await emailjs.send(serviceID, templateID, templateParams);
            formStatus.textContent = 'E-mail enviado com sucesso! Responderei em breve.';
            formStatus.className = 'text-center mt-4 text-sm text-green-400';
            contactForm.reset();
        }
        catch (error) {
            console.error('Falha no envio:', error);
            formStatus.textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente.';
            formStatus.className = 'text-center mt-4 text-sm text-red-400';
        }
        finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Mensagem';
        }
    });
}
//# sourceMappingURL=email.js.map