import urllib.request, json

url = 'https://api.github.com/users/ozanardaozcelik/repos?per_page=100&sort=updated'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    print(f"Total repos: {len(data)}")
    for r in data:
        print(f"- {r['name']} | lang: {r['language']} | stars: {r['stargazers_count']} | desc: {r['description']} | topics: {r.get('topics', [])} | url: {r['html_url']}")
except Exception as e:
    print('Error:', e)
