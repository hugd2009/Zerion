@echo off
echo Lancement de Ollama...
start "Ollama" cmd /k "set OLLAMA_HOST=0.0.0.0 && set OLLAMA_ORIGINS=* && ollama serve"

timeout /t 3 /nobreak

echo Lancement de Ngrok...
start "Ngrok" cmd /k "ngrok http 11434"

echo Tout est lance !
