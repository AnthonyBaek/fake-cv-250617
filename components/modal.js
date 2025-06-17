function showModal(title, contentHTML) {
  // 기존 모달이 있으면 제거
  const existingModal = document.getElementById('modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 생성
  const modalOverlay = document.createElement('div');
  modalOverlay.id = 'modal-overlay';
  modalOverlay.className = 'modal-overlay';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = title;

  const closeButton = document.createElement('button');
  closeButton.className = 'modal-close-btn';
  closeButton.innerHTML = '&times;';
  closeButton.onclick = () => closeModal();

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  
  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  modalBody.innerHTML = contentHTML;

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalOverlay.appendChild(modalContent);

  document.body.appendChild(modalOverlay);

  // 외부 클릭 시 닫기
  modalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  });

  // Esc 키로 닫기
  document.addEventListener('keydown', handleEscKey);
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.remove();
  }
  document.removeEventListener('keydown', handleEscKey);
}

function handleEscKey(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}
