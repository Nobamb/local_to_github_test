// 로컬에서 깃허브로 보내기 위한 연습
// 1. git init
// 깃 초기화(github에서 로컬로 clone할땐 필요없음)
// 2. git remote add origin https://github.com/Nobamb/local_to_github_test.git
// 목적지에 대한 별칭 지정(레포지토리명 => origin)
// 3. git branch -M main
// 브랜치명 변경(local에서 github로 보낼 땐 브랜치명 때문에 충돌날 수 있기에)
// 4. git push -u origin main
// origin(목적지(레포지토리)), main(브랜치), -u 기본값 지정
// -u는 필수는 아니지만, git push만 해도 레포지토리로 보낼 수 있게됨