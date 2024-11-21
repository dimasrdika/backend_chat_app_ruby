class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
  end

  def unsubscribed
    # Cleanup ketika user keluar
  end

  def send_message(data)
    ActionCable.server.broadcast("chat_#{data['room']}", {
      username: data['username'],
      message: data['message'],
      time: Time.now.strftime("%H:%M"),
    })
  end
end
