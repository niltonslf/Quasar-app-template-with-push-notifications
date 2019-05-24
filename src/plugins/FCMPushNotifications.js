
export default ({ router }) => {
// Recebe notificações vindas do firebase cloud message
  function onNotificationCallback (data) {
    alert('Notificações reebida', JSON.stringify(data))
  }
  // mensagem de sucesso
  function success (msg) {
    alert('Sucesso', JSON.stringify(msg))
  }
  // mensagem de erro
  function error (msg) {
    alert('error', msg)
  }
  setTimeout(() => {
    // Listener do evento de notificação
    window.FCMPlugin.onNotification(onNotificationCallback, success, error)
  }, 200)
}
